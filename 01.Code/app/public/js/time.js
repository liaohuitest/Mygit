/**
 * Created by Administrator on 2017/05/21 0021.
 */
function startTime()
{
    var today=new Date()
    var h=today.getHours()
    var m=today.getMinutes()
    var s=today.getSeconds()
// add a zero in front of numbers<10
    m=checkTime(m)
    s=checkTime(s)
    document.getElementById('txt').innerHTML=h+":"+m+":"+s
    t=setTimeout('startTime()',500)
}
function checkTime(i)
{
    if (i<10)
    {i="0" + i}
    return i
}
function getyear(){
    var odate=new Date()
    years=odate.getFullYear()
    month=odate.getMonth()+1
    day=odate.getDate()
    document.getElementById("years").innerHTML=years+"/"+month+"/"+day
}
