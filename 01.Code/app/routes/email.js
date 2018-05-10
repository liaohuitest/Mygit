
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


var transport = nodemailer.createTransport(smtpTransport({
    host: "smtpcn01.huawei.com",
    secureConnection: true,
    port:587,
    auth: {
        user: "apscloud@mail01.huawei.com",
        pass: 'zzQ!ee8G'
    }
}));

module.exports.model =  function () {
    let send  =  {
        sendMail:function (tomail,html,id,subject) {
        let mailOptions = {
            from: " pmail_APSCloud  <apscloud@mail01.huawei.com>", // 发件地址
            to: tomail, // 收件列表
            subject: subject, // 标题
            html: html
        };
        transport.sendMail(mailOptions,
            function(error, response) {
                if (error) {
                    console.log("orderID:"+id,error);
                } else {
                    console.log("orderID:"+id ,'sendmail success');
                    transport.close()
                }
            });
    }
    };

             return send
}

// 发送邮件




