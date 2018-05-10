"use strict";
const express = require('express');
const router = express.Router();
const page = require('./orderpage');
const check = require('./check');
const mysqlpool = require("./dbconfig.js");
const db = mysqlpool.sqlpool();
const md5 = require("./md5.js");

const sendmail  = require("./email.js");





/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect("index.html")
});
router.get('/page/index.html',function (req, res, next) {
    if(!req.session.user){
        res.redirect('/page/login.html')
    }else {
        next()
    }
});
// 登录
router.post('/login.do', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    password = md5(password+"kaola");
    var get_client_ip = function(req) {
        var ip = req.headers['x-forwarded-for'] ||
            req.ip ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress || '';
        if(ip.split(',').length>0){
            ip = ip.split(',')[0]
        }
        return ip;
    };
     let  ipadress = get_client_ip(req).split(':')[3];
    let sql = "select * from t_aws_user where login_name = ? ";
    let arr = [username];
    db.connect(sql, arr, function (err, data) {
        if (data.length > 0 && data != undefined) {
            if (data[0].login_pwd == password && data[0].user_status == 1) {
                let sql1 = 'update t_aws_user set user_logintime = now(),user_loginip = ?  where user_id =?';
                let arr1 = [ipadress,data[0].user_id];
                db.connect(sql1, arr1, function (err1, data1) {
                    if (err1 == null && data1 != undefined) {
                        req.session.user = data[0];
                        res.send('ok;' + data[0].user_flag + ';' + data[0].user_id + ';' + data[0].login_name + ';' + data[0].user_name)
                    }
                })
            } else if (data[0].login_pwd == password && data[0].user_status == 0) {
                res.send('disabled')
            } else if (data[0].login_pwd != password) {
                res.send('erropwd')
            }
        } else {
            res.send('fail');
        }
    });
});
// router.post('/login.do',  sendmail.model().sendMail);
// 获取用户
router.post('/getuser.do', function (req, res) {
    if (req.session.user) {
        res.send(req.session.user)
    }
});
// 点击个人设置
router.post('/showuser.do', function (req, res) {
    let id = req.body.userid;
    let sql = 'select * from t_aws_user where user_id = ?';
    let arr = [id];
    db.connect(sql, arr, function (err, data) {
        if (data.length > 0 && data != undefined) {
            res.send(data[0])
        } else {
            res.send('0')
        }
    })
});
// 个人设置提交
router.post('/edituser.do', function (req, res) {
    let showuser = JSON.parse(req.body.showuser);
    let changeOk = req.body.changeOk;
    if(changeOk== 'true'){
        showuser.login_pwd = md5(showuser.login_pwd+"kaola");
    }
    let sql = 'update t_aws_user set login_name=?,login_pwd=?,user_name=?,user_phone=?,user_email=?,user_org=?  where user_id = ?';
    let arr = [showuser.login_name, showuser.login_pwd, showuser.user_name,
        showuser.user_phone, showuser.user_email, showuser.user_org, showuser.user_id];
    db.connect(sql, arr, function (err, data) {
        if (err == null && data != undefined) {
            res.send('1')
        } else {
            res.send('0')
        }
    })
});
// 界面提交订单
router.post("/submitorder.do", function (req, res) {
    let order = JSON.parse(req.body.order);
    let sql, arr;
console.log(order.area);
    // deployment_areacode
    if (order.user_scale == '0') {
        sql = 'insert into  t_aws_order(deployment_areacode,customer_name,customer_contacter,customer_phone,customer_email,' +
            'device_scale,project_scale,order_duration,order_status,result_description,order_submittime,order_expiredtime) ' +
            'values(?,?,?,?,?,?,?,?,0,"待审核",now(),date_add(now(),INTERVAL ' + order.duration + ' month))' ;
        arr = [order.area,order.company, order.contacter, order.phone, order.emai, order.device_scale, order.scale, order.duration, order.submit_time];
    } else if (order.device_scale == '0') {
        sql = 'insert into  t_aws_order(deployment_areacode,customer_name,customer_contacter,customer_phone,customer_email,' +
            'subscriber_scale,project_scale,order_duration,order_status,result_description,order_submittime,order_expiredtime) ' +
            'values(?,?,?,?,?,?,?,?,0,"待审核",now(),date_add(now(),INTERVAL ' + order.duration + ' month))';
        arr = [order.area,order.company, order.contacter, order.phone, order.emai, order.user_scale, order.scale,
            order.duration, order.submit_time]
    } else {
        sql = 'insert into  t_aws_order(deployment_areacode,customer_name,customer_contacter,customer_phone,customer_email,' +
            'subscriber_scale,device_scale,project_scale,order_duration,order_status,result_description,order_submittime,order_expiredtime) ' +
            'values(?,?,?,?,?,?,?,?,?,0,"待审核",now(),date_add(now(),INTERVAL ' + order.duration + ' month))';
        arr = [order.area,order.company, order.contacter, order.phone, order.emai, order.user_scale, order.device_scale, order.scale,
            order.duration, order.submit_time]
    }
    let sql1 = 'insert into t_aws_order_product (order_id,product_id,deploy_status,result_description) values ?';
    let arr1 = [];
    db.connect(sql, arr, function (err, data) {

        if (err == null) {
            var a = [];
            for (let i in order.product) {
                if (order.product[i] == "om") {
                    a = [data.insertId, 1, 0, '待审核']
                } else if (order.product[i] == "im") {
                    a = [data.insertId, 3, 0, '待审核']
                } else if (order.product[i] == "osp") {
                    a = [data.insertId, 4, 0, '待审核']
                }   else if (order.product[i] == "am") {
                    a = [data.insertId, 2, 0, '待审核']
                } else if (order.product[i] == "wfm") {
                    a = [data.insertId, 5, 0, '待审核']
                }
                arr1.push(a)
            }
            db.connect(sql1, [arr1], function (err1, data1) {
                if (err1 == null) {
                    res.send('1')
                } else {
                    console.log(err1);
                    res.send('0')
                }
            })
        } else {
            res.send('0');
            console.log(err)
        }
    })
});
// 订单总页数
router.post('/serpagetotal.do', page.mysearch().pageCountTotal);
// 加载订单
router.post('/getorder.do', page.mysearch().searchContent);
// 点击显示订单产品信息
router.get("/productsinfo.do", function (req, res) {
    let productid = req.query.productID;
    let sql = 'select twod.op_id,twod.op_id,twod.product_id,tad.product_code,tad.product_name, ' +
        'twod.deploy_status,twod.deploy_begintime,twod.deploy_endtime,twod.result_flag,' +
        ' twod.result_description from t_aws_order_product twod  inner join t_aws_product tad on ' +
        ' twod.product_id = tad.product_id where twod.order_id = ?';
    let arr = [productid];
    db.connect(sql, arr, function (err, data) {
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
            for (let i in data) {
                data[i].deploy_begintime = makeDate(data[i].deploy_begintime);
                data[i].deploy_endtime = makeDate(data[i].deploy_endtime);
            }
            res.send(data)
        }
    })
});
// 订单产品详情
router.get('/productdetail.do', function (req, res) {
    let opid = req.query.id;
    let sql = ' SELECT tac.component_id ,tac.component_code,tac.component_name,' +
        'tac.component_type,tae.eci_id,tae.instance_id,tae.instance_name,taodd.deploy_url ' +
        'FROM  t_aws_order_product taop ' +
        'LEFT JOIN t_aws_order_deploy_detail taodd ON taop.op_id = taodd.op_id ' +
        'LEFT JOIN t_aws_component tac ON tac.product_id = taop.product_id  AND tac.component_id = taodd.component_id ' +
        'LEFT JOIN t_aws_ec2instance tae ON tae.eci_id=taodd.eci_id ' +
        'WHERE taodd.op_id =?';
    let arr = [opid];
    db.connect(sql, arr, function (err, data) {
        console.log(err);
        if (data.length > 0 && data != undefined) {
            res.send(data)
        } else {
            res.send('0')
        }
    })
});
//订单详情
router.get('/getorderdetail.do', function (req, res) {
    let orderid = req.query.id;
    let sql = 'select * from t_aws_order where order_id = ?';
    let arr = [orderid]
    db.connect(sql, arr, function (err, data) {
        if (err) {
            console.log(err)
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
            data[0].order_submittime = makeDate(data[0].order_submittime);
            data[0].order_expiredtime = makeDate(data[0].order_expiredtime);
            data[0].deploy_begintime = makeDate(data[0].deploy_begintime);
            data[0].deploy_endtime = makeDate(data[0].deploy_endtime);
            data[0].destory_begintime = makeDate(data[0].destory_begintime);
            data[0].destory_endtime = makeDate(data[0].destory_endtime);
            data[0].audit_time = makeDate(data[0].audit_time);
            data[0].destroy_endtime = makeDate(data[0].destroy_endtime);
            data[0].destroy_begintime = makeDate(data[0].destroy_begintime);
            res.send(data[0])
        }
    })
});
// 审核
router.post('/passcheck.do', check.checkOrder().check);
// 注销
router.post('/deletstack.do',check.checkOrder().writeoff);
// 日志
router.get('/getorderlog.do', function (req, res) {
    let id = req.query.id;
    let sql = 'select * from t_aws_order_log  where order_id = ?';
    let arr = [id];
    db.connect(sql, arr, function (err, data) {
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
            }
            for (let i in data) {
                data[i].begin_time = makeDate(data[i].begin_time);
                data[i].end_time = makeDate(data[i].end_time);
            }
            res.send(data)
        }
    })
});
// 新增产品详情TAB
router.post('/getproductdetail.do', function (req, res) {
    let orderid = req.body.order_id;
    let sql = 'SELECT a.order_id,b.op_id,product_name,d.component_name,d.component_type,f.eci_id,f.instance_id,f.instance_name,c.deploy_url ' +
        'FROM t_aws_order a INNER JOIN t_aws_order_product b ON a.order_id = b.order_id ' +
        'INNER JOIN t_aws_order_deploy_detail c ON c.op_id = b.op_id ' +
        'INNER JOIN t_aws_component d ON c.component_id = d.component_id ' +
        'INNER JOIN t_aws_product e ON e.product_id = d.product_id ' +
        'LEFT JOIN t_aws_ec2instance f ON c.eci_id = f.eci_id ' +
        'WHERE a.order_id= ?';
    let arr = [orderid];
    db.connect(sql, arr, function (err, data) {
        if (err) {
            console.log(err)
        } else if (data.length > 0 && data != undefined) {
            res.send(data)
        }
    })
});
//用户总页数
router.post('/serpagetotaluser.do', function (req, res) {
    let id = req.body.id;
    let username = req.body.name;
    let sql = "SELECT count(*) as count FROM t_aws_user where 1=1";
    let arr = [];
    if (id != "" && id != undefined) {
        sql += " and user_id = ?";
        arr.push(id);
    }
    if (username != "" && username != undefined) {
        sql += " and user_name like ?";
        username = username.trim();
        username = "%" + username + "%";
        arr.push(username);
    }
    function cbPageCountTotal(err, data) {
        if (data != undefined) {
            res.send("" + Math.ceil(data[0].count / 8));
        }
    }
    db.connect(sql, arr, cbPageCountTotal);
});
// 加载用户
router.post('/userinfo.do', function (req, res) {
    let id = req.body.id;
    let username = req.body.name;
    let sql = "SELECT *  FROM t_aws_user where 1=1";
    let arr = [];
    if (id != "" && id != undefined) {
        sql += " and user_id = ?";
        arr.push(id);
    }
    if (username != "" && username != undefined) {
        sql += " and user_name like ?";
        username = username.trim();
        username = "%" + username + "%";
        arr.push(username);
    }
    if (page >= 1) {
        sql += " limit " + (page - 1) * 8 + ",8";
    }
    db.connect(sql, arr, function (err, data) {
        if (data.length > 0 && data != undefined) {
            res.send(data)
        } else {
            res.send('none')
        }
    })
});
// 添加用户
router.post('/adduser.do', function (req, res) {
    let newuser = JSON.parse(req.body.newuser);
    newuser.login_pwd = md5(newuser.login_pwd+"kaola");
    let sql = 'insert into t_aws_user (login_name,login_pwd,user_name,user_phone,user_email,' +
        'user_org,user_flag,user_status) values (?,?,?,?,?,?,?,?)';
    let arr = [newuser.login_name, newuser.login_pwd, newuser.user_name, newuser.user_phone, newuser.user_email,
        newuser.user_org, newuser.user_flag, 1];
    db.connect(sql, arr, function (err, data) {
        if (err == null) {
            res.send("" + data.insertId)
        } else {
            console.log(err);
            res.send('0')
        }
    })
});
//查询有无用户名相同的用户
router.get('/getSameuser.do',function (req, res) {
    let loginname = req.query.login_name;
    console.log(loginname);
    let sql = 'select count(*) count from t_aws_user  where login_name = ? ';
    let arr = [loginname];
    db.connect(sql,arr,function (err, data) {
        if(err) {
            console.log(err)
        }else if(data[0].count>0 && data!= undefined) {
            res.send('same')
        }else{
            res.send("none")
        }
    })
});
// 点击修改用户按钮
router.get('/userupdate.do', function (req, res) {
    let userid = req.query.userid;
    let sql = 'select * from t_aws_user where user_id=?';
    let arr = [userid];
    db.connect(sql, arr, function (err, data) {
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
        data[0].user_logintime = makeDate(data[0].user_logintime)
        res.send(data[0])
    })
});
// 修改用户
router.post('/sureupdateuser.do', function (req, res) {
    let showuser = JSON.parse(req.body.newuser);
    let flag = req.body.flag;
    if(flag == 'true'){
        showuser.login_pwd = md5(showuser.login_pwd+"kaola");
    }
    let sql = 'update t_aws_user set login_name=?,login_pwd=?,user_name=?,user_phone=?,user_email=?,user_org=?,user_flag = ?  where user_id = ?';
    let arr = [showuser.login_name, showuser.login_pwd, showuser.user_name,
        showuser.user_phone, showuser.user_email, showuser.user_org, showuser.user_flag,showuser.user_id,];
    db.connect(sql, arr, function (err, data) {
        if (err == null && data != undefined) {
            res.send('1')
        } else {
            res.send('0')
        }
    })
});
// 禁用用户
router.post("/changeuserstatus.do", function (req, res) {
    let id = req.body.id;
    let sql = 'update t_aws_user set user_status = 0 where user_id = ?';
    let arr = [id];
    db.connect(sql, arr, function (err, data) {
        if (err == null && data != undefined) {
            res.send('ok')
        }
    })
});
// 激活用户
router.post('/activityuserstatus.do', function (req, res) {
    let id = req.body.id;
    let sql = 'update t_aws_user  set user_status = 1 where user_id = ?';
    let arr = [id];
    db.connect(sql, arr, function (err, data) {
        if (err == null && data != undefined) {
            res.send('ok')
        }
    })
});
module.exports = router;