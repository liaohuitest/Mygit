"use strict";
const mysqlpool = require("./dbconfig.js");
const db = mysqlpool.sqlpool();
module.exports.mysearch = function () {
    let search = {
        /*总页数*/
        pageCountTotal: function (req, res) {
            let id = req.body.id;
            let contacter = req.body.contacter;
            let company = req.body.company;
            let phone = req.body.phone;
            let status = req.body.searchstatus;
            let searchflag = req.body.searchflag;
            let sql = "SELECT count(*) as count FROM t_aws_order where 1=1";
            let arr = [];
            if (id != "" && id != undefined) {
                sql += " and order_id = ?";
                arr.push(id);
            }
            if (contacter != "" && contacter != undefined) {
                sql += " and customer_phone like ?";
                contacter = contacter.trim();
                contacter = "%" + contacter + "%";
                arr.push(contacter);
            }
            if (company != "" && company != undefined) {
                sql += " and customer_name like ?";
                company = company.trim();
                company = "%" + company + "%";
                arr.push(company)
            }
            if (phone != "" && phone != undefined) {
                sql += " and customer_phone like ?";
                phone = "%" + phone.trim() + "%";
                arr.push(phone)
            }
            if (status && status != "10" && status != undefined) {
                sql += " and order_status = ?";
                arr.push(status)
            }
            if(searchflag && searchflag!='10'){
                sql += 'and result_flag = ?';
                arr.push(searchflag)
            }
            function cbPageCountTotal(err, data) {
                if (data != undefined) {
                    res.send("" + Math.ceil(data[0].count / 7));
                }
            }
            db.connect(sql, arr, cbPageCountTotal);
        },
        searchContent: function (req, res) {
            let id = req.body.id;
            let contacter = req.body.contacter;
            let company = req.body.company;
            let page = req.body.page;
            let phone = req.body.phone
            let status = req.body.searchstatus;
            let searchflag = req.body.searchflag;
            let sql = "select * from t_aws_order where 1=1 ";
            let arr = [];
            if (id != "" && id != undefined) {
                sql += " and order_id = ?";
                arr.push(id);
            }
            if (contacter != "" && contacter != undefined) {
                sql += " and customer_contacter like ?";
                contacter = "%" + contacter.trim() + "%";
                arr.push(contacter);
            }
            if (company != "" && company != undefined) {
                sql += " and customer_name like ?";
                company = "%" + company.trim() + "%";
                arr.push(company)
            }
            if (phone != "" && phone != undefined) {
                sql += " and customer_phone like ?";
                phone = "%" + phone.trim() + "%";
                arr.push(phone)
            }
            if (status && status != "10" && status != undefined) {
                sql += " and order_status = ?";
                arr.push(status)
            }
            if(searchflag && searchflag!='10'){
                sql += 'and result_flag = ?';
                arr.push(searchflag)
            }
            if (page >= 1) {
                sql +=  "order by order_status asc,order_id desc limit " + (page - 1) * 7 + ",7";
            }
            db.connect(sql, arr, function (err, data) {
                if (data.length > 0 && data != undefined) {
                    /*转换数据库时间*/
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
                        data[i].order_submittime = makeDate(data[i].order_submittime);
                        data[i].order_expiredtime = makeDate(data[i].order_expiredtime);
                        data[i].deploy_begintime = makeDate(data[i].deploy_begintime);
                        data[i].deploy_endtime = makeDate(data[i].deploy_endtime);
                        data[i].destory_begintime = makeDate(data[i].destory_begintime);
                        data[i].destory_endtime = makeDate(data[i].destory_endtime);
                        data[i].audit_time = makeDate(data[i].audit_time);
                    }
                    res.send(data)
                } else {
                    res.send('none')
                }
            })

        }
    }
    return search;
};