/**
 * Created by Administrator on 2016/5/19.
 */
window.onload=function () {

    $('#btnStart').onclick=JSClock;

}
var startDate;
var interval;
function startCount(){

    var inputTime=  $('#year').value ;
    $('#time').innerText= inputTime+' 00:00:00';
    var dateArg=  inputTime.split('-');
   startDate=new Date(dateArg[0],dateArg[1]-1,dateArg[2]).getTime();
    interval=setInterval(decreseCount,1000)
}

function decreseCount(){
    var now=new Date().getTime();
    rest=(startDate-now)/1000;
}