//			$(".choice").on("click",function(){
//				if($(this).children('.mask').hasClass('active')){
//					$(this).children('.mask').removeClass('active');
//				}else{
//					$(this).children('.mask').addClass('active')
//				}
//
//			})
//var app=new Vue({
//  el:'#app',
//  data:{
//		English:true,
//  }
//  ,computed:{
//
//  }
//})
var English=true;
var obj = {OM: '', IM: '', Osp: '', AM: '', WFM: ''};
var count = 0;
var count1 = 0;
var count2 = 0;
var result = {company: "false", contact: "false", phone: 'false', email: 'false'};
//		var $form=$("#myform");
var $inputs = $("#myform").find("input");
var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;//验证邮箱
//		var reg1=/^\+?[1-9][0-9]*$/;  //验证非0的正整数
var reg1 = /^([1-9][0-9]*){1,3}$/;
var valid;
var duration;
$(".submits").prop("disabled",true);
//console.log('kais',English)
//切换语言
function change_language(){
	English=!English;
	if(English==true){
		$("#eng").addClass("language_active");
		$("#chin").removeClass("language_active");
		$("#english").show();
		$("#chinese").hide();
//		English=false;
	}else{
		$("#english").hide();
		$("#chinese").show();
		$("#eng").removeClass("language_active");
		$("#chin").addClass("language_active");
//		English=true;
	}
}


//提交按钮默认禁止状态
$(document).ready(function () {
				$("#chinese").hide();
})
//function checkAllPro(){
//	
//}
//全选--英文版
$("input[id='check-all']").on("click", function () {
    if ($("input[id='check-all']").prop("checked") == true) {
        $("input[type='checkbox']").prop("checked", true);
    } else {
        $("input[type='checkbox']").prop("checked", false);
    }
//			console.log($("input[id='check-all']").prop("checked"));
});
//全选--中文版
$("input[id='checkAll']").on("click", function () {
    if ($("input[id='checkAll']").prop("checked") == true) {
        $("input[type='checkbox']").prop("checked", true);
    } else {
        $("input[type='checkbox']").prop("checked", false);
    }
//			console.log($("input[id='check-all']").prop("checked"));
});
//判断业务规模
$("input[type='checkbox']").on("click", function () {
    //判断用户是否有选择产品信息
    var _this = $(this);
    if (_this.prop("name") != "check-all") {
        var val = _this.val();
        if (_this.prop('checked') == true) {
            obj[val] = val;
            count = count + 1;
        } else {
            obj[val] = '';
            count = count - 1;
        }
    } else {
        if (_this.prop('checked') == true) {
            count = 5;
            for (var value in obj) {
                obj[value] = value;
            }
        } else {
            count = 0;
            for (var value in obj) {
                obj[value] = '';
            }
        }
    }
    if (count == 0 || count1 == 0) {
        $(".submits").prop("disabled", true);
    } else {
        $(".submits").prop("disabled", false);
    }
//			判断选择哪个规模
//			if((obj.IM=="IM" || obj.Osp=="Osp" )&&  (obj.OM=="" &&  obj.AM=="" &&  obj.WFM=="")){
//				$(".fist-situation").hide();
//				$(".second-situation").show();
//			}else{
//				$(".second-situation").hide();
//				$(".fist-situation").show();
//			}
})
$("input[type='radio']").on('click', function () {
    count1 = 1;
    if (count == 0 || count1 == 0) {
        $(".submits").prop("disabled", true);
    } else {
        $(".submits").prop("disabled", false);
    }
})
$inputs.on("blur", function () {
    var _this = $(this);
    var _name = _this.prop("name");
    var value = _this.val().trim();
    var result1;
    if (_name == "company" || _name == "contact" || _name == "phone") {
        if (value == '' || value == ' ') {
            _this.addClass("redcolor");
            result[_name] = "false";
            $(".form-group").addClass("require");
        } else {
            _this.removeClass("redcolor");
            $(".form-group").removeClass("require");
            result[_name] = "true";
        }
    } else {
        result1 = reg.test(value)
        if (result1 == false) {
            _this.addClass("redcolor");
            $(".form-group").addClass("require");
            result[_name] = "false";
        } else {
            _this.removeClass("redcolor");
            $(".form-group").removeClass("require");
            result[_name] = "true";
        }
    }
})
//判断期限是否填写
$("#duration").on("keyup", function () {
    var result2 = reg1.test(parseInt($(this).val()));
    if (result2 == true) {
        count2 = 1;
        duration = parseInt($(this).val());
        $(this).removeClass("redcolor");
    } else {
        count2 = 0;
        $(this).addClass("redcolor");
    }
//			if(count==0 || count1==0){
//				$("#submit").prop("disabled",true);
//			}else{
//				$("#submit").prop("disabled",false);
//			}
//			console.log(typeof parseInt($(this).val()),result2,parseInt($(this).val()));
})
$(".submits").on("click", function () {
    var valid = 0;
    var product = [];//选择的产品
    var company, contacter, phone, emai, scale, submit_time, order_deadline;
    var device_scale = 0;
    var project_scale = 0;
    for (var value in result) {
        if (result[value] == 'false') {
            $("input[name='" + value + "']").addClass("redcolor");
            valid = valid - 1;
        } else {
            $("input[name='" + value + "']").removeClass("redcolor");
            valid = valid + 1;
        }
        if (count2 == 0) {
            $("#duration").addClass("redcolor");
        } else {
            $("#duration").removeClass("redcolor");
        }
    }
    //所有信息都验证通过
    if (valid >= 4 && count != 0 && count1 != 0 && count2 != 0) {
        //获取选择的产品
        var checkbx = $("input[type='checkbox']");
        for (var i = 0; i < checkbx.length; i++) {
            if (checkbx[i].name != 'check-all' && checkbx[i].checked == true) {
                product.push(checkbx[i].name);
            }
        }
        //获取选择的产品规模
        var radeo = $("input[type='radio']:checked");
        if (radeo.length == 1) {
            scale = radeo.val();
            console.log(radeo.prop("name"));
            if (radeo.prop("name") == "homewide") {
                project_scale = radeo.val();
//              console.log('00000');
            } else {
                device_scale = radeo.val();
            }
        } else {
            project_scale = $("input[name='homewide']:checked").val();
            device_scale = $("input[name='device']:checked").val();
            if (parseInt(project_scale) >= parseInt(device_scale)) {
                scale = parseInt(project_scale);
            } else {
                scale = parseInt(device_scale);
            }
        }
        console.log("scal:", scale, "project_scale:", project_scale, "device:", device_scale);
        //获取客户信息
        company = $("#company").val();
        contacter = $("#contact").val();
        phone = $("#phone").val();
        email = $("#email").val();
        var now_time = new Date();
        var year = now_time.getFullYear();
        var month = now_time.getMonth() + 1;
        var dat = now_time.getDate();
        var hour = now_time.getHours();
        var minute = now_time.getMinutes();
        var second = now_time.getSeconds();
        var mon = (duration + month) % 12;
        var yea = Math.floor((duration + month) / 12);
        submit_time = year + '-' + month + "-" + dat + " " + hour + ":" + minute + ":" + second;
        if ((duration + month) % 12 == 0) {
            order_deadline = (year + yea - 1) + '-' + "12" + "-" + dat + " " + hour + ":" + minute + ":" + second;
        } else {
            order_deadline = (year + yea) + '-' + (mon) + "-" + dat + " " + hour + ":" + minute + ":" + second;
        }
//
        var order = {
            "product": product,
            "duration": duration,
            "device_scale": device_scale,
            "user_scale": project_scale,
            "scale": scale,
            "submit_time": submit_time,
            "order_deadline": order_deadline,
            "company": company,
            "contacter": contacter,
            "phone": phone,
            "emai": email,
        };
        $.ajax({
            type: "post",
            url: "/submitorder.do",
            dataType: "json",
            data: {
                order: JSON.stringify(order),
            },
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            success: function (data) {
//              console.log(data);
                if (data == '1') {
                    $('#myModal').modal();
				setTimeout(function(){
                    $("input[type='text']").val("");
                    $("input[type='email']").val("");
                    $("input[type='checkbox']").prop("checked",false);
                    $("input[type='radio']").prop('checked',false);
                },500);
                } else {
                    //失败的模态框
                    $('#failed').modal();
                    setTimeout(function(){
                        $("input[type='text']").val("");
                        $("input[type='email']").val("");
                        $("input[type='checkbox']").prop("checked",false);
                        $("input[type='radio']").prop('checked',false);
                    },500);
                }
            }
        });
    }
})
//重置按钮--刷新页面
$(".reset").on("click", function () {
	var bool=false;
	console.log('eglish',English);
	bool=English;
   	 window.location.href=window.location.href;
	console.log('eglish',English,bool);
})
