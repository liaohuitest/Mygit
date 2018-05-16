"use strict";
const AWS = require('aws-sdk');
/*亚马逊SDK*/
const mysqlpool = require("./dbconfig.js");
/*链接池*/
const db = mysqlpool.sqlpool();
/*亚马逊配置凭证*/
// AWS.config.loadFromPath('./routes/config.json');
AWS.config.update({
    accessKeyId: '',
    secretAccessKey: ''
});
/*创建云服务模板*/
const templat = require('./model.js');
/*邮件发送*/
const sendmail = require("./email.js");
/*审核方法*/
module.exports.checkOrder = function () {
    let method = {
        /*部署云服务*/
        check: function (req, res) {
            let id = req.body.id;
            /*订单ID*/
            let content = req.body.content;
            /*审核意见*/
            let result = req.body.result;
            /*审核结果*/
            let user = JSON.parse(req.body.user);
            /*审核者的信息*/
            let sqlorder, arrorder;
            if (result == 1) {
                /*当审核通过时修改产品状态*/
                sqlorder = 'update t_aws_order tao,t_aws_order_product taop SET tao.order_status=1,tao.audit_time= now() , ' +
                    'taop.deploy_status=1,tao.result_flag =1,taop.result_flag =1,tao.result_description = ?,taop.result_description=? ' +
                    'where tao.order_id=taop.order_id and tao.order_id= ?';
                arrorder = [content, content, id];

                db.connect(sqlorder, arrorder, function (err, data) {
                    if (err == null && data != undefined) {
                        res.send('checksuccess');
                        /*生成审核通过日志*/
                        let sqllogpass = 'insert into t_aws_order_log (order_id,begin_status,end_status,user_id,login_name,user_name,' +
                            'begin_time,end_time,begin_resultflag,end_resultflag,description) values (?,0,1,?,?,?,now(),now(),NULL,1,"通过")';
                        let arr1 = [id, user.user_id, user.login_name, user.user_name];
                        db.connect(sqllogpass, arr1, function (err1, data1) {
                            if (err1) {
                                console.log(err1 + "Log generation failure!")
                            }
                        });
                        /*查询订单包含什么产品*/
                        let sqlsearchproduct = 'select taop.product_id,taop.op_id,tao.deployment_areacode from t_aws_order_product taop inner join t_aws_order tao on taop.order_id=tao.order_id where tao.order_id = ? ';
                        let arrsearchproduct = [id];
                        let alldataproduct;
                        db.connect(sqlsearchproduct, arrsearchproduct, function (err, dataproduct) {
                            if (err) {
                                console.log(err + "Product query failure！")
                            } else {
                                alldataproduct = dataproduct;
                                var region;
                                /*查询到产品的部署区域*/
                                region = alldataproduct[0].deployment_areacode;
                                /*创建服务配置*/
                                var cloudformation = new AWS.CloudFormation({apiVersion: '2010-05-15', region: region});
                                var idobjec = {};
                                /*根据区域更换产品ID*/
                                switch (region) {
                                    case 'sa-east-1':
                                        idobjec = {
                                            am: 'ami-ba453fd6',
                                            db: 'ami-44473d28',
                                            im: 'ami-97473dfb',
                                            om: 'ami-44463c28',
                                            osp: 'ami-f4473d98',
                                            wfm: 'ami-1c403a70',
                                        };
                                        break;
                                    case 'ap-northeast-1':
                                        idobjec = {
                                            am: 'ami-1a54207c',
                                            db: 'ami-906b1ff6',
                                            im: 'ami-0a691d6c',
                                            om: 'ami-915521f7',
                                            osp: 'ami-bf5420d9',
                                            wfm: 'ami-05542063',
                                        };
                                        break;
                                }
                                let defaultname = "username" + id;
                                /*地址栏显示信息*/
                                let defaultdnsprefix = 'oss-' + id;
                                let common = templat.model().common(defaultname, defaultdnsprefix, region, idobjec.db);
                                for (var i = 0; i < dataproduct.length; i++) {
                                    if (dataproduct[i].product_id == 1) {
                                        let om = templat.model().OM(idobjec.om);
                                        for (let j in om) {
                                            common.Resources["" + j + ""] = om[j]
                                        }
                                    } else if (dataproduct[i].product_id == 2) {
                                        let am = templat.model().AM(idobjec.am);
                                        for (let j in am) {
                                            common.Resources["" + j + ""] = am[j]
                                        }
                                    } else if (dataproduct[i].product_id == 3) {
                                        let im = templat.model().IM(idobjec.im);
                                        for (let j in im) {
                                            common.Resources["" + j + ""] = im[j]
                                        }
                                    } else if (dataproduct[i].product_id == 4) {
                                        let osp = templat.model().OSP(idobjec.osp);
                                        for (let j in osp) {
                                            common.Resources["" + j + ""] = osp[j]
                                        }
                                    } else if (dataproduct[i].product_id == 5) {
                                        let wfm = templat.model().WFM(idobjec.wfm);
                                        for (let j in wfm) {
                                            common.Resources["" + j + ""] = wfm[j]
                                        }
                                    }
                                }
                                let stackName = "Product" + id;
                                let params = {
                                    StackName: stackName,
                                    EnableTerminationProtection: false,
                                    OnFailure: 'DO_NOTHING', /*ROLLBACK | DELETE*/
                                    TemplateBody: JSON.stringify(common),
                                };
                                /*创建stack*/
                                cloudformation.createStack(params, function (err, data) {
                                    if (err) {
                                        console.log(err, err.stack);
                                    }
                                    else {
                                        /*  生成部署日志*/
                                        let logid;
                                        let sqldeploylog = 'insert into t_aws_order_log (order_id,begin_status,end_status,user_id,login_name,user_name,' +
                                            'begin_time,end_time,begin_resultflag,end_resultflag,description) values (?,1,4,NULL,NULL,"系统后台",now(),NULL,1,NULL,"部署中")';
                                        let arrdeploylog = [id];
                                        db.connect(sqldeploylog, arrdeploylog, function (errlog, datalog) {
                                            if (errlog) {
                                            } else {
                                                logid = datalog.insertId
                                            }
                                        });

                                        /*查看部署情况*/
                                        var begin_time = new Date();
                                        let stackDetail = setInterval(function () {
                                            let params1 = {StackName: stackName};

                                            cloudformation.describeStacks(params1, function (err, data) {
                                                if (err) {
                                                    console.log(stackName+'deploy situation',err);
                                                    clearInterval(stackDetail);
                                                } else {
                                                    let sql = 'update t_aws_order set deploy_begintime = ? ,';
                                                    /*更改订单状态*/
                                                    let sqllog1 = 'update t_aws_order_log set  ';
                                                    /*更改日志*/
                                                    let sqlproduct = 'update t_aws_order_product set deploy_begintime = ?, ';
                                                    /*更改订单产品状态*/
                                                    var end_time = ''
                                                    if (data.Stacks[0].StackStatus == 'CREATE_COMPLETE') {
                                                        /*部署成功*/
                                                        end_time =  new Date();
                                                        let url = data.Stacks[0].Outputs[1].OutputValue;
                                                        let ipv4 = data.Stacks[0].Outputs[0].OutputValue;
                                                        clearInterval(stackDetail);
                                                        /*清楚定时器*/
                                                        sqlproduct += "deploy_endtime= now(),result_flag =3,deploy_status=5,result_description ='部署完成' ";
                                                        sqllog1 += 'end_status = 5,end_resultflag = 3,end_time = now(),description="部署完成"  ';
                                                        sql += 'order_status = 5,result_flag = 3,deploy_endtime= ?  ';
                                                        /*检查部署了那些资源*/
                                                        cloudformation.describeStackResources(params1, function (err, datastack) {
                                                            if (err) {
                                                                console.log( stackName+'Resources'+err, err.stack);
                                                                clearInterval(stackDetail);
                                                            } else {
                                                                if (datastack.StackResources != null) {
                                                                    /*生成ec2表*/
                                                                    let sqlinstance = 'insert into t_aws_ec2instance (order_id,stack_name,instance_id,instance_name,eci_status,aws_configuration,public_ip_ipv4) values (?,?,?,?,?,?,?) ';
                                                                    let arrinstance = [];
                                                                    let sqldeploydetail = 'insert into t_aws_order_deploy_detail (op_id,eci_id,component_id,deploy_url) values ? ';
                                                                    for (let i in datastack.StackResources) {
                                                                        if (datastack.StackResources[i].LogicalResourceId == 'UserAM') {
                                                                            arrinstance = [id, stackName, datastack.StackResources[i].PhysicalResourceId, 'UserAM', 1, JSON.stringify(common), ipv4];
                                                                            db.connect(sqlinstance, arrinstance, function (err, data) {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                    console.log('Storage of AM failed!')
                                                                                } else {
                                                                                    let arrdeploydetailam = [];
                                                                                    for (let j = 0; j < alldataproduct.length; j++) {
                                                                                        if (alldataproduct[j].product_id == 2) {
                                                                                            arrdeploydetailam.push([alldataproduct[j].op_id, data.insertId, 3, null], [alldataproduct[j].op_id, data.insertId, 4, null], [alldataproduct[j].op_id, data.insertId, 5, 'http://' + url + ":9003/am"]);
                                                                                        }
                                                                                    }
                                                                                    db.connect(sqldeploydetail, [arrdeploydetailam], function (err, data) {
                                                                                        if (err) {
                                                                                            console.log(err);
                                                                                            console.log(stackName + "Am deployment table failure!")
                                                                                        } else {
                                                                                            console.log(stackName + "Am deployment table success!")
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        } else if (datastack.StackResources[i].LogicalResourceId == 'UserIM') {
                                                                            arrinstance = [id, stackName, datastack.StackResources[i].PhysicalResourceId, 'UserIM', 1, JSON.stringify(common), ipv4];
                                                                            db.connect(sqlinstance, arrinstance, function (err, data) {
                                                                                if (err) {
                                                                                    console.log(stackName + '存储UserIM失败EC')
                                                                                } else {
                                                                                    console.log(data.insertId);
                                                                                    let arrdeploydetailim = [];
                                                                                    for (let j = 0; j < alldataproduct.length; j++) {
                                                                                        if (alldataproduct[j].product_id == 3) {
                                                                                            arrdeploydetailim.push([alldataproduct[j].op_id, data.insertId, 6, null], [alldataproduct[j].op_id, data.insertId, 7, 'http://' + url + ":9002/SRMWeb"]);
                                                                                        }
                                                                                    }
                                                                                    db.connect(sqldeploydetail, [arrdeploydetailim], function (err, data) {
                                                                                        if (err) {
                                                                                            console.log(err);
                                                                                            console.log(stackName + "Deploying Im table failure!")
                                                                                        } else {
                                                                                            console.log(stackName + "Im deployment table success!")
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        } else if (datastack.StackResources[i].LogicalResourceId == 'UserOM') {
                                                                            arrinstance = [id, stackName, datastack.StackResources[i].PhysicalResourceId, 'UserOM', 1, JSON.stringify(common), ipv4];
                                                                            db.connect(sqlinstance, arrinstance, function (err, data) {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                    console.log('存储UserOM失败EC')
                                                                                } else {
                                                                                    let arrdeploydetailom = [];
                                                                                    for (let j = 0; j < alldataproduct.length; j++) {
                                                                                        if (alldataproduct[j].product_id == 1) {
                                                                                            arrdeploydetailom.push([alldataproduct[j].op_id, data.insertId, 1, null], [alldataproduct[j].op_id, data.insertId, 2, 'http://' + url + ':9001/sg4sa']);
                                                                                        }
                                                                                    }
                                                                                    db.connect(sqldeploydetail, [arrdeploydetailom], function (err, data) {
                                                                                        if (err) {
                                                                                            console.log(err);
                                                                                            console.log("Deploying Om table failure!")
                                                                                        } else {
                                                                                            console.log(stackName + "Om deployment table success!")
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        } else if (datastack.StackResources[i].LogicalResourceId == 'UserOSP') {
                                                                            arrinstance = [id, stackName, datastack.StackResources[i].PhysicalResourceId, 'UserOSP', 1, JSON.stringify(common), ipv4];
                                                                            db.connect(sqlinstance, arrinstance, function (err, data) {
                                                                                if (err) {
                                                                                    console.log(stackName + 'UserOSP EC  failer')
                                                                                } else {
                                                                                    console.log(data.insertId);
                                                                                    let arrdeploydetailosp = [];
                                                                                    for (let j = 0; j < alldataproduct.length; j++) {
                                                                                        if (alldataproduct[j].product_id == 4) {
                                                                                            arrdeploydetailosp.push([alldataproduct[j].op_id, data.insertId, 8, null], [alldataproduct[j].op_id, data.insertId, 9, 'http://' + url + ':9005/TeleOsp']);
                                                                                        }
                                                                                    }
                                                                                    db.connect(sqldeploydetail, [arrdeploydetailosp], function (err, data) {
                                                                                        if (err) {
                                                                                            console.log(err);
                                                                                            console.log(stackName + "Deploying Osp table failure!")
                                                                                        } else {
                                                                                            console.log(stackName + "Osp deployment table success!")
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        } else if (datastack.StackResources[i].LogicalResourceId == 'UserWFM') {
                                                                            arrinstance = [id, stackName, datastack.StackResources[i].PhysicalResourceId, 'UserWFM', 1, JSON.stringify(common), ipv4];
                                                                            db.connect(sqlinstance, arrinstance, function (err, data) {
                                                                                if (err) {
                                                                                    console.log('存储UserWFM失败EC')
                                                                                } else {
                                                                                    let arrdeploydetailwfm = []
                                                                                    for (let j = 0; j < alldataproduct.length; j++) {
                                                                                        if (alldataproduct[j].product_id == 5) {
                                                                                            arrdeploydetailwfm.push([alldataproduct[j].op_id, data.insertId, 10, null], [alldataproduct[j].op_id, data.insertId, 11, 'http://' + url + ':9004']);
                                                                                        }
                                                                                    }
                                                                                    db.connect(sqldeploydetail, [arrdeploydetailwfm], function (err, data) {
                                                                                        if (err) {
                                                                                            console.log(err);
                                                                                            console.log(stackName + "Deploying Wfm table failure!")
                                                                                        } else {
                                                                                            console.log(stackName + "Wfm deployment table success!")
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                    let sqlmail = "SELECT taodd.deploy_url,taop.product_id,tap.product_name,tac.loginname,tac.loginpass,tao.customer_email,tao.order_submittime,tao.deploy_endtime,tao.customer_contacter FROM  t_aws_order_product taop LEFT JOIN t_aws_product  tap ON taop.product_id = tap.product_id LEFT JOIN t_aws_order_deploy_detail taodd ON taop.op_id = taodd.op_id LEFT JOIN t_aws_component tac ON tac.product_id = taop.product_id  AND tac.component_id = taodd.component_id LEFT JOIN t_aws_order tao ON tao.order_id = taop.order_id  LEFT JOIN t_aws_ec2instance tae ON tae.eci_id=taodd.eci_id WHERE taop.order_id = ? AND tac.component_type=3";
                                                                    let arrmail = [id];
                                                                    setTimeout(function () {
                                                                            db.connect(sqlmail, arrmail, function (err, data) {
                                                                                if (err) {
                                                                                    console.log('orderID' + id, err)
                                                                                } else {
                                                                                    if (data.length > 0 && data != undefined) {
                                                                                        let makeDate = function (date) {
                                                                                            if (date == null) {
                                                                                                return null
                                                                                            } else {
                                                                                                var newDate = new Date(date);
                                                                                                var month = eval(newDate.getMonth() + 1) < 10 ? '0' + eval(newDate.getMonth() + 1) : eval(newDate.getMonth() + 1);
                                                                                                var day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
                                                                                                var hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
                                                                                                var minutes = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
                                                                                                var seconds = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
                                                                                                var stringDate = newDate.getFullYear() + '-' + month + '-' + day + " " + hours + ":" + minutes + ":" + seconds;
                                                                                                return stringDate;
                                                                                            }
                                                                                        };
                                                                                        for (let i = 0; i < data.length - 1; i++) {
                                                                                            if (data[i].product_id == data[i + 1].product_id) {
                                                                                                data.splice(i + 1, 1);
                                                                                                i--
                                                                                            }
                                                                                        }
                                                                                        let html = "<div style='font-size: 20px; font-weight: 300;'>Dear " + data[0].customer_contacter + ",</div>  " +
                                                                                            " <div style='font-size: 16px; font-weight: 300;margin-top: 10px;'>Huawei APS Cloud environment is ready for you to use, the details are as following: </div>"+
                                                                                            " <div style='font-size: 16px; margin-top: 10px'>Order ID: <span style='font-size: 16px;'>" + id + "</span></div>" +
                                                                                            " <div style='font-size: 16px;'>Order submit time: <span style='font-size: 16px;'>"+ makeDate(data[0].order_submittime) +"</span></div>" +
                                                                                            " <div style='font-size: 16px;'>Order completion time: <span style='font-size: 16px;'>" + makeDate(data[0].deploy_endtime )+"</span></div>" +
                                                                                            " <div style='font-size: 16px; margin-top: 10px'>Products built:</div> "
                                                                                        var b = '';
                                                                                        for (let i = 0; i < data.length; i++) {
                                                                                            var a = '';
                                                                                            a = "<div style='font-size: 16px;'> "+ data[i].product_name + "</div>" +
                                                                                                "<div style='font-size: 16px;margin-left: 50px'>Access URL: <span style='font-size: 16px;'><a target='_blank' href= "+data[i].deploy_url+" >"+ data[i].deploy_url +"</a></span></div> " +
                                                                                                "<div style='font-size: 16px;margin-left: 50px'>Account: <span style='font-size: 16px;'>" + data[i].loginname + "</span></div>" +
                                                                                                "<div style='font-size: 16px;margin-left: 50px'>Password: <span style='font-size: 16px;'>" + data[i].loginpass + "</span></div>";
                                                                                            b = a + b
                                                                                        }
                                                                                        html = html+b ;
                                                                                        var subject = 'Huawei APS Cloud environment for your order ('+id+') has been created successfully';
                                                                                        sendmail.model().sendMail(data[0].customer_email, html, id, subject)
                                                                                    }
                                                                                }
                                                                            })
                                                                        }
                                                                        , 60000)
                                                                }
                                                            }
                                                        });
                                                    } else if (data.Stacks[0].StackStatus == 'CREATE_FAILED') {
                                                        /*部署失败*/
                                                        end_time =  new Date();
                                                        console.log(stackName+'falier');
                                                        clearInterval(stackDetail);
                                                        sqlproduct += "deploy_endtime = now(),result_flag= 2,deploy_status=5,result_description ='部署失败' ";
                                                        sqllog1 += 'end_status = 5,end_resultflag = 2,end_time = now(),description="部署失败" ';
                                                        sql += 'result_description=?,order_status = 5,result_flag = 2,deploy_endtime= ? ';
                                                    }
                                                    else if (data.Stacks[0].StackStatus == 'CREATE_IN_PROGRESS') {
                                                        sql += 'order_status = 4,result_flag = NULL ';
                                                        sqlproduct += "deploy_status=4,result_flag = NULL,result_description= NULL";
                                                        sqllog1 += 'description = "部署中",begin_status = 1  '
                                                    }
                                                    sql += 'where order_id = ?';
                                                    sqllog1 += ' where ol_id = ?';
                                                    sqlproduct += ' where order_id = ?';
                                                    let arr;
                                                    if (data.Stacks[0].StackStatus == 'CREATE_FAILED') {
                                                        arr = [begin_time, data.Stacks[0].StackStatusReason,end_time,id];
                                                    } else if(data.Stacks[0].StackStatus == 'CREATE_COMPLETE') {
                                                        arr = [begin_time,end_time,id];
                                                    }else {
                                                        arr = [begin_time,id];
                                                    }
                                                    let arrlog = [logid];
                                                    let arrporduct = [data.Stacks[0].CreationTime, id];
                                                    db.connect(sql, arr, function (err, data) {
                                                        if (err == null && data != undefined) {
                                                            db.connect(sqllog1, arrlog, function (err, data) {
                                                                    if (err) {
                                                                        console.log(stackName+'.log update failure!' + err)
                                                                    }
                                                                    else {
                                                                        console.log(stackName+". log is being updated!")
                                                                    }
                                                                }
                                                            );
                                                            db.connect(sqlproduct, arrporduct, function (err, data) {
                                                                if (err) {
                                                                    console.log(stackName+"failure of product update")
                                                                } else {
                                                                    console.log( stackName+" product is being deployed!")
                                                                }
                                                            })
                                                        }
                                                    });
                                                }
                                            });
                                        }, 10000)
                                    }
                                });
                            }
                        });
                    }
                })
            } else if (result == 0) {
                /*当审核未通过时的处理*/
                sqlorder = 'update t_aws_order tao,t_aws_order_product taop SET tao.order_status=1,tao.audit_time= now() ,' +
                    'tao.result_flag = 0,taop.deploy_status=1,tao.result_description = ?,taop.result_description=? ,taop.deploy_status=98,taop.result_flag=0  where tao.order_id=taop.order_id and tao.order_id= ?';
                arrorder = [content, content, id];
                db.connect(sqlorder, arrorder, function (err, data) {
                    if (err == null && data != undefined) {
                        res.send('checkfail');
                        let sql1 = 'insert into t_aws_order_log (order_id,begin_status,end_status,user_id,login_name,user_name,' +
                            'begin_time,end_time,begin_resultflag,end_resultflag,description) values(?,0,1,?,?,?,now(),now(),NULL,0,"未通过")';
                        let arr1 = [id, user.user_id, user.login_name, user.user_name];
                        db.connect(sql1, arr1, function (err1, data1) {
                            if (err1) {
                                console.log(id, err1);
                            }
                        })
                    }
                })
            }
        },
        writeoff: function (req, res) {
            var deployFlag = req.body.deployFlag;
            let orderid = req.body.orderid;
            let user = JSON.parse(req.body.user);
            let content = req.body.content;
            let stackName = "Product" + orderid;
            let params = {StackName: stackName};
            let sqlsearchproduct = 'select tao.deployment_areacode from t_aws_order tao  where tao.order_id = ? ';
            let arrsearchproduct = [orderid];
            db.connect(sqlsearchproduct, arrsearchproduct, function (err, dataproduct) {
                var region = dataproduct[0].deployment_areacode;
                var cloudformation = new AWS.CloudFormation({apiVersion: '2010-05-15', region: region});
                cloudformation.deleteStack(params, function (err, data) {
                    if (err) {
                        console.log(stackName + 'error', err, err.stack);
                    } else {
                        res.send("deleOk");
                        let sqlorderupdate;
                        if( deployFlag == 'true'){
                           sqlorderupdate = 'update t_aws_order tao,t_aws_order_product taop SET tao.destroy_begintime = now(),' +
                                'tao.result_flag = NULL,taop.result_flag=null,taop.result_description=null,tao.order_status= 7,taop.deploy_status = 7 where tao.order_id = ? and tao.order_id = taop.order_id ';
                        }else {
                            sqlorderupdate = 'update t_aws_order tao,t_aws_order_product taop SET tao.destroy_begintime = null,' +
                                'tao.result_flag = NULL,taop.result_flag=null,taop.result_description=null,tao.order_status= 10,taop.deploy_status =10 where tao.order_id = ? and tao.order_id = taop.order_id';
                        }
                        let arrorderupdate = [orderid];
                        db.connect(sqlorderupdate, arrorderupdate, function (err, data) {
                            if (err) {
                                console.log(stackName, err);
                            } else {
                                let sqllogdele;
                                if(deployFlag=='true'){
                                    sqllogdele = 'insert into t_aws_order_log (order_id,begin_status,end_status,user_id,login_name,user_name,' +
                                        'begin_time,begin_resultflag,end_resultflag,description) values (?,5,7,?,?,?,now(),3,null,"注销中")';
                                }else {
                                    sqllogdele = 'insert into t_aws_order_log (order_id,begin_status,end_status,user_id,login_name,user_name,' +
                                        'begin_time,begin_resultflag,end_resultflag,description) values (?,5,10,?,?,?,now(),2,null,"清除中")';
                                }
                                let arrdele = [orderid, user.user_id, user.login_name, user.user_name];
                                db.connect(sqllogdele, arrdele, function (err, data) {
                                    if (err) {
                                        console.log(stackName, err)
                                    } else {
                                        let logid = data.insertId;
                                        let deletprogress = setInterval(function () {
                                            cloudformation.describeStacks(params, function (err, data) {
                                                if (err) {
                                                    console.log(stackName, err);
                                                    clearInterval(deletprogress);
                                                    console.log(5);
                                                    if(deployFlag != 'true'){
                                                        let sqllog =  'update t_aws_order_log set end_status = 9,end_resultflag = 3,description="已清除",end_time = now() where ol_id = ? ';
                                                        let arrdele = [logid];
                                                        db.connect(sqllog, arrdele, function (err, data) {
                                                            if (err) {
                                                                console.log(stackName, err)
                                                            } else {
                                                                let sqlorder1 = 'UPDATE t_aws_order tao,t_aws_order_product taop SET tao.order_status= 9,tao.audit_time= NULL,taop.deploy_status= 9,tao.result_flag = 3 ,taop.result_flag = 3,tao.deploy_begintime=NULL,tao.deploy_endtime=NULL,taop.deploy_begintime=NULL,tao.destroy_begintime=NULL,tao.destroy_endtime=NULL,taop.deploy_endtime=NULL,tao.result_description =?,taop.result_description=? where tao.order_id=taop.order_id AND tao.order_id= ?;';
                                                                let arrorder1 = [content, content, orderid];
                                                                db.connect(sqlorder1, arrorder1, function (err, data) {
                                                                    if (err) {
                                                                        console.log(stackName, err)
                                                                    } else {
                                                                        console.log(stackName + 'Delete success!');
                                                                        let sqlinstace = 'update t_aws_ec2instance set destory_time = now(),eci_status = 0 where order_id = ? ';
                                                                        let sqlarr = [orderid];
                                                                        db.connect(sqlinstace, sqlarr, function (err, data) {
                                                                            if (err) {
                                                                                console.log(stackName, err)
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        });
                                                    }
                                                } else {
                                                    console.log(stackName + "In the cancellation");
                                                    if (data.Stacks[0].StackStatus == 'DELETE_FAILED') {
                                                        clearInterval(deletprogress);
                                                        cloudformation.deleteStack(params, function (err, data) {
                                                            if (err) {
                                                                console.log(err, err.stack);
                                                            } else {
                                                                let sqllogdeleupdate;
                                                                if(deployFlag== 'true'){
                                                                     sqllogdeleupdate = 'update t_aws_order_log set end_status=8,end_resultflag = 3,description="已注销",end_time = now() where ol_id = ? ';
                                                                }else {
                                                                    sqllogdeleupdate = 'update t_aws_order_log set end_status= 9,end_resultflag = 3,description="已清除",end_time = now() where ol_id = ? ';
                                                                }
                                                                let arrdeleupdate = [logid];
                                                                db.connect(sqllogdeleupdate, arrdeleupdate, function (err, data) {
                                                                    if (err) {
                                                                        console.log(stackName, err)
                                                                    } else {
                                                                        console.log(stackName + 'Delete success!');
                                                                    }
                                                                });

                                                                let sqlorder;
                                                                if (deployFlag== 'true') {
                                                                    sqlorder = 'update t_aws_order tao,t_aws_order_product taop SET tao.order_status= 8,taop.deploy_status=100,tao.result_flag = 3, tao.destroy_endtime = now(),taop.deploy_status = 100,taop.result_flag=3,tao.result_description = ?,taop.result_description=? where tao.order_id=taop.order_id and tao.order_id= ?';
                                                                    setTimeout(function () {
                                                                            let sqlmail = 'SELECT tao.customer_email,tao.customer_contacter,tao.destroy_endtime,tao.order_submittime,tap.product_name FROM t_aws_order tao ' +
                                                                                'LEFT JOIN t_aws_order_product taop ON taop.order_id = tao.order_id ' +
                                                                                'LEFT JOIN t_aws_product tap ON tap.product_id = taop.product_id ' +
                                                                                'WHERE tao.order_id = ?';
                                                                            let arrmail = [orderid];
                                                                            db.connect(sqlmail, arrmail, function (err, data) {
                                                                                if (err) {
                                                                                    console.log('orderID' + orderid, err)
                                                                                } else {
                                                                                    let makeDate = function (date) {
                                                                                        if (date == null) {
                                                                                            return null
                                                                                        } else {
                                                                                            var newDate = new Date(date);
                                                                                            var month = eval(newDate.getMonth() + 1) < 10 ? '0' + eval(newDate.getMonth() + 1) : eval(newDate.getMonth() + 1);
                                                                                            var day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
                                                                                            var hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
                                                                                            var minutes = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
                                                                                            var seconds = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
                                                                                            var stringDate = newDate.getFullYear() + '-' + month + '-' + day + " " + hours + ":" + minutes + ":" + seconds;
                                                                                            return stringDate;
                                                                                        }
                                                                                    };
                                                                                    let html = '<div style="font-size:20px;font-weight: 400">Dear '+data[0].customer_contacter +',</div>' +
                                                                                        '<div style="margin-top: 10px;font-weight: 300;font-size:16px;">Huawei APS Cloud environment built for you is now torn-down and no longer available, the details are as following:</div> ' +
                                                                                        '<div style="font-size:16px;margin-top: 10px;">Order ID: <span>'+orderid+'</span> </div>' +
                                                                                        '<div style="font-size:16px;">Order submit time: <span>'+makeDate(data[0].order_submittime)+'</span> </div>' +
                                                                                        ' <div style="font-size:16px;" >Order torn-down time: <span>'+makeDate(data[0].destroy_endtime)+'</span></div>' +
                                                                                        '<div style="margin-top: 10px;font-size:16px;">Products torn-down:</div>';
                                                                                    if (data.length > 0 && data != undefined){
                                                                                        let subject = 'Huawei APS Cloud environment for your order ('+orderid+') has been torn down';
                                                                                        var b = '';
                                                                                        for(let i=0;i<data.length;i++){
                                                                                            var a = '<div style="font-size:16px;">'+data[i].product_name+'</div>';
                                                                                            b =b+a
                                                                                        }
                                                                                        html= html + b;
                                                                                        sendmail.model().sendMail(data[0].customer_email, html, orderid,subject)
                                                                                    }
                                                                                }
                                                                            })
                                                                        }
                                                                        , 60000)
                                                                } else {
                                                                    sqlorder = 'UPDATE t_aws_order tao,t_aws_order_product taop SET tao.order_status= 9,tao.audit_time= NULL,taop.deploy_status= 9,tao.result_flag = 3 ,taop.result_flag = 3,tao.deploy_begintime=NULL,tao.deploy_endtime=NULL,taop.deploy_begintime=NULL,tao.destroy_begintime=NULL,tao.destroy_endtime=NULL,taop.deploy_endtime=NULL,tao.result_description =?,taop.result_description=? where tao.order_id=taop.order_id AND tao.order_id= ?;'
                                                                }
                                                                let arrorder = [content, content, orderid];
                                                                db.connect(sqlorder, arrorder, function (err, data) {
                                                                    if (err) {
                                                                        console.log(stackName, err)
                                                                    } else {
                                                                        let sqlinstace = 'update t_aws_ec2instance set destory_time = now(),eci_status = 0 where order_id = ? ';
                                                                        let sqlarr = [orderid];
                                                                        db.connect(sqlinstace, sqlarr, function (err, data) {
                                                                            if (err) {
                                                                                console.log(stackName, err)
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                }
                                            });
                                        }, 10000)
                                    }
                                });
                            }
                        })
                    }
                });

            })


        },
    };
    return method
};

