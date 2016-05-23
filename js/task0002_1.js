/**
 * Created by Administrator on 2016/5/9.
 */
window.onload=function () {
   
    $.click($('#bhobby'),function(){
        var input=$('#hobby');
        var arr=input.value.split(',');
        arr=uniqArray(arr);
        var text=[];
        arr.forEach(function (element) {
            if(element.trim())
            {
                text.push(element);
            }
        });
        $('#phobby').innerHTML=text;
    }) ;

    $.click($("#bhobby2"),function(){
        var hobbies = $("#hobby2").value;
        console.log((hobbies));
        var result = "";
        if(hobbies != null){
            var hobby = hobbies.split(/,|;|；|，|\n/);
            var uniqHobby = uniqArray(hobby);
            var hobby = uniqHobby.filter(function(x){
                return x!="";
            });
            result = hobby.join("-")
        }
        $("#phobby2").innerHTML = "your hobbies are:"+result;
    });
    $.click($("#bhobby3"),function(){
        var hobbies = $("#hobby3").value;
        console.log((hobbies));
        var result = "";
        if(hobbies != null){
            var hobby = hobbies.split(/,|;|；|，|\n/);
            var uniqHobby = uniqArray(hobby);
            var hobby = uniqHobby.filter(function(x){
                return x!="";
            });
            var p=$('#check');
            hobby.forEach(function (element) {
             var box=  document.createElement('input');
                box.setAttribute('value',element);
                box.setAttribute('type','checkbox');
                p.appendChild(box);
                var text= document.createTextNode(element);
                p.appendChild(text);
                var br= document.createElement('br');
                p.appendChild(br);
            });
        }

    });
}