
//点击添加学生保存
$(".tianjiasave").on("click", function () {
    var a = $("#stu_nm1").val()
    var b = $("#pp_phone1").val()
    var c = $("#stu_sex1").val()
    var d = $("#stu_bb1").val()
    var e = $("#stu_date1").val()
    var f = $("#stu_class1").val()
    var g = $("#stu_nuber1").val()
    arrstudent.push({
        "studentname": a, "sex": c,
        "jibie": g, "class": f, "age": e, "fathername": d, "telenuber": b
    })
    $("tbody").empty()
    jiazai1()
})
//点击删除 从数组删除
$("#dele").on("click", function () {
    if ($("[name='xingming']:checked").length == 0) {
        $(this).attr("data-target", "#dele1Modal")
    }
    else {
        $(this).attr("data-target", "#deleModal")
        $("#suredele").on("click", function () {
            for (var i = 0; i < $("[name='xingming']:checked").length; i++) {
                var oldgrade = $("[name='xingming']:checked").eq(i).next().text()
                //console.log(oldgrade)
                for (var j = 0; j < arrstudent.length; j++) {
                    if (arrstudent[j].studentname == oldgrade) {
                        arrstudent.splice(j, 1);
                    }
                }
            }
            $("tbody").empty();
            jiazai1()
        })
    }
})
//给选着班级框添加事件
$("#chooseclass").on("change", function () {
    var a = $(this).val();
    $("tbody").empty();
    for (var j = 0; j < arrstudent.length; j++) {
        if (arrstudent[j].class == a) {
            var iteam = arrstudent[j];
//        添加部门信息到表格
            var depname = ' <tr>' +
                ' <td class="banji"><input type="checkbox" name="xingming">&nbsp;<span>' + iteam.studentname + '</span></td> ' +
                '<td class="ren">' + iteam.sex + '</td> ' +
                '<td class="jiedua">' + iteam.jibie + '</td> ' +
                '<td>' + iteam.class + '</td>' +
                ' <td>' + iteam.age + '</td> ' +
                '<td>' + iteam.fathername + '</td> ' +
                '<td>' + iteam.telenuber + '</td> <td> ' +
                '<button type="button" class="bianji btn btn-info" data-toggle="modal"data-dismiss="modal" data-target="#bianjiModal">编辑 <span class="glyphicon glyphicon-pencil"></span> </button> </td> ' +
                '</tr>'
            $('tbody').prepend(depname);
        }
    }
    if (a == "全部") {
        jiazai1()
    }
})
//给搜索框添加事件
$("#sousuo").on("click", function () {
    var a = $("#xuesheng").val();
    var b = []
    for (var i = 0; i < arrstudent.length; i++) {
        b.push(arrstudent[i].studentname)
    }
    if (b.indexOf(a) == -1) {
        $(this).attr("data-target", "#bucunModal")
        console.log(b.indexOf(a));
    } else {
        $(this).attr("data-target", "")
        $("tbody").empty();
        for (var j = 0; j < b.length; j++) {
            if (b[j] == a) {
                var iteam = arrstudent[j];
                var depname = ' <tr>' +
                    ' <td class="banji"><input type="checkbox" name="xingming">&nbsp;<span>' + iteam.studentname + '</span></td> ' +
                    '<td class="ren">' + iteam.sex + '</td> ' +
                    '<td class="jiedua">' + iteam.jibie + '</td> ' +
                    '<td>' + iteam.class + '</td>' +
                    ' <td>' + iteam.age + '</td> ' +
                    '<td>' + iteam.fathername + '</td> ' +
                    '<td>' + iteam.telenuber + '</td> <td> ' +
                    '<button type="button" class="bianji btn btn-info" data-toggle="modal"data-dismiss="modal" data-target="#bianjiModal">编辑 <span class="glyphicon glyphicon-pencil"></span> </button> </td> ' +
                    '</tr>'
                $('tbody').prepend(depname);
                $("#xuesheng").val("")
            }
        }
    }
})
//给转班添加事件
$("#zhuanban").on("click", function () {
    if ($("[name='xingming']:checked").length == 0) {
        $(this).attr("data-target", "#dele1Modal")
    }
    else {
        $(this).attr("data-target", "#zhuanModal")
        $("#surezhuan").on("click", function () {
            var a = $("#zhuanclass").val()
            for (var i = 0; i < $("[name='xingming']:checked").length; i++) {
                var oldgrade = $("[name='xingming']:checked").eq(i).next().text()
                for (var j = 0; j < arrstudent.length; j++) {
                    if (arrstudent[j].studentname == oldgrade) {
                        arrstudent[j].class = a
                    }
                }
            }
            $("tbody").empty();
            jiazai1()
        })
    }
})

//分页
var pg = 1;

function mypage1(obj) {
    $(".page1").addClass("active");
    $(".page2").removeClass("active");
    $("tbody").empty();
    jiazai1()
}

function mypage2(obj) {
    $(".page2").addClass("active");
    $(".page1").removeClass("active");
    $("tbody").empty();
    jiazai2()
}

function qianyiye() {
    if (pg > 1) {
        mypage(pg - 1)
    }
    if (pg == 1) {
        mypage(1)
    }
}

function houyiye() {
    if (pg < 5) {
        mypage(pg + 1)
    }
    if (pg == 5) {
        mypage(5)
    }
}
