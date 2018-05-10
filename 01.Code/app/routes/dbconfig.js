const mysql = require("mysql");
"use strict";
module.exports.sqlpool = function (){
    let pool ={
            config:{
                host:  '172.18.1.205',
                user: 'portal',
                password: 'portal',
                database: 'portal',
                port: 3306,
            },
        connect:function(sql,arr,fn){
            var pool= mysql.createPool(this.config);
            pool.getConnection(function(err,connection){
                if(err){
                    console.log(err)
                }
                connection.query(sql,arr,fn);
                connection.release();
                pool.end();
            });
        }
    };
    return pool;
};


