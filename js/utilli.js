/**
 * Created by Administrator on 2016/5/10.
 */
function isArray(arr) {
    //方法一
    //return arr instanceof Array;
    //方法二
    return Object.prototype.toString.call(arr)==="[object Array]";

    //方法3
   // return Array.isArray(arr) ;
}
function isFunction(fn) {
  return typeof  fn=='function';
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
   var obj=src.constructor==Array ? []:{};
    for(var key in src)
    {
        if(src.hasOwnProperty(key))
        {
            obj[key] = typeof src[key] === "object" ? cloneObject(src[key]) : src[key];
        }
    }
    return obj;
}

function uniqArray(arr) {
     if(isArray(arr))
    {
        var reslt=[];
        for(var i=0;i<arr.length;)
        {
            reslt.push(arr[i]);
            for(var k=1;k<arr.length;k++)
            {
                if(arr[i]==arr[k])
                {
                    arr.splice(k,1);
                    k--;
                }
            }
            arr.shift();
        }
        return reslt;
     }
}

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var newStr;
    var head,tail;
     for(  head=0;head<str.length;head++)
     {
         if(str.charAt(head)!==' '&&str.charAt(head)!=='    ')
         {
             break;
         }

     }
    for(  tail=str.length-1;tail>-1;tail--)
    {
        if(str.charAt(tail)!==' '&&str.charAt(tail)!=='    ')
        {
            tail++;
            break;
        }
    }
    newStr=str.slice(head,tail);
    return newStr;
}
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace( /\s+/g, "" );
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    var len = arr.length;
    for (var i=0; i < len; i++) {
        fn(arr[i],i);

    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    if(typeof obj=='object')
    {
       var arr= Object.keys(obj);
        return arr.length;
    }
    else
    {
        alert('不是object!');
    }
}
// 判断是否为邮箱地址
function isEmail(emailStr) {
    return /sd/.test(emailStr);
}


/*
// 判断是否为邮箱地址
function isEmail(emailStr) {
    return /^\w+([\.-]?\w)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailStr)
}

// 判断是否为手机号
function isMobilePhone(phone) {
    return /^1[3|4|5|7|8|]\d{9}$/.test(phone);
}*/
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.classList.add(newClassName);
}
// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.classList.remove(oldClassName);
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentElement() === siblingNode.parentElement();
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
/*
 function getPosition(element) {
 var x=0;
 var y=0;
 while(element!=null)
 {
 x+=element.offsetLeft;
 y+=element.offsetTop;
 element=element.offsetParent;
 }
 return [x,y];
 }*/

// 实现一个简单的Query

function $(selector,optBase) {
    var locEnvirenment=optBase;
    var element;
    if(optBase===undefined)
    {
        locEnvirenment=document;
    }
    if(optBase===null)
    {
        return null;
    }
    selector=selector.trim();
   if(selector.contains(' '))
    {
       var arrSelector= selector.split(' ');
        for(var i=0;i<arrSelector.length;i++)
        {

            locEnvirenment= $(arrSelector[i],locEnvirenment);
        }
       return locEnvirenment;
    }
    if(selector.charAt(0)=='#')
    {
       return element= locEnvirenment.getElementById(selector.slice(1));
    }
    else if(selector.charAt(0)=='.')
    {
        element= locEnvirenment.getElementsByClassName(selector.slice(1));
        if(element!=null)
        {
            return element;
        }
        else
        {
            return locEnvirenment=null;
        }
    }
    else
    {
        element=  locEnvirenment.getElementsByTagName(selector);
        if(element!=null)
        {
            return element;
        }
        else
        {
            return locEnvirenment=null;
        }
    }
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
     if ( element.addEventListener ) {
        element.addEventListener( event, listener, false );
    }
}
// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if( element.dispatchEvent)
    {
        element.dispatchEvent(event, listener, false);
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    element.onclick = listener;
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    element.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            listener();
        }
    }
}
$.on = function (element, event,listener) {
    addEvent(element, event,listener)
};

$.un = function (element, event, listener) {
    removeEvent(element, event, listner)
};

$.click = function (element, listener) {
    addClickEvent(element,listener)
};

$.enter = function(element,listener) {
    addEnterEvent(element,listneer)
};

// 先简单一些
 function delegateEvent(element, tag, eventName, listener) {
    element['on'+eventName]=function (e) {
       var e=e||window.event;
       var target= e.target ? e.target : e.srcElement;
        if(target.tagName.toLowerCase()==tag){
            listener(e);
        }
    }; 
}
$.delegate = delegateEvent;

function ajax(url, options) {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(!options.type)
    {
        options.type='GET';
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            options.onsuccess(responseText,xmlhttp);
        }
        else
        {
            options.onfail(responseText,xmlhttp);
        }
    }
    xmlhttp.open( options.type,url,true);
    xmlhttp.send();
}
