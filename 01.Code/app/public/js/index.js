$(function () {
    $(".list>li:first-child").addClass('activecolor');
    var user = JSON.parse(window.sessionStorage.getItem("user"));
    if(!user){
        window.location.href='/page/login.html'
    }else if(user.user_flag==0 || user.user_flag == 1){
        $ ('.list>li:last-child').css('display','none')
    }
    $('#selfModal').modal({
        show: false,
        backdrop: 'static'
    });
});
function reload(){
    document.getElementsByClassName('tab')[0].contentWindow.location.reload(true);
}
function edit() {
    window.location.href='/page/login.html';
    window.sessionStorage.removeItem('user');
}