function first(){
    document.getElementById('first_con').setAttribute("style", "display: block;")
    document.getElementById('btn1').setAttribute("class", "btn-active btn-sec")
    document.getElementById('second_con').setAttribute("style", "display: none;")
    document.getElementById('btn2').setAttribute("class", "btn-sec")
    document.getElementById('third_con').setAttribute("style", "display: none;")
    document.getElementById('btn3').setAttribute("class", "btn-sec")
}
function second(){
    document.getElementById('first_con').setAttribute("style", "display: none;")
    document.getElementById('btn1').setAttribute("class", "btn-sec")
    document.getElementById('second_con').setAttribute("style", "display: block;")
    document.getElementById('btn2').setAttribute("class", "btn-active btn-sec")
    document.getElementById('third_con').setAttribute("style", "display: none;")
    document.getElementById('btn3').setAttribute("class", "btn-sec")
}
function third(){
    document.getElementById('first_con').setAttribute("style", "display: none;")
    document.getElementById('btn1').setAttribute("class", "btn-sec")
    document.getElementById('second_con').setAttribute("style", "display: none;")
    document.getElementById('btn2').setAttribute("class", "btn-sec")
    document.getElementById('third_con').setAttribute("style", "display: block;")
    document.getElementById('btn3').setAttribute("class", "btn-active btn-sec")
}

/**************************************************************************************************************/

function subscribe(){
    var inp_val = document.getElementById('email').value;
    var p_val = document.getElementById('err');

    if(inp_val.length == 0){
        p_val.setAttribute("style", "display: block;");
    }else{
        inp_val2 = inp_val;
        p_val.setAttribute("style", "display: none;");
        document.getElementById('email').value = '';
        setTimeout(alert_fun,100);
    }
}
function alert_fun(){
    alert(inp_val2+" :تم اشتراكك بالايميل");
}

/**************************************************************************************************************/

var check;

function send(){
    var first = document.getElementById('name').value;
    var second = document.getElementById('email2').value;
    var third = document.getElementById('msg').value;
    var first_p = document.getElementById('err2');
    var second_p = document.getElementById('err3');
    var third_p = document.getElementById('err4');

    if(first.length == 0){
        first_p.style.display = "block"
    }else{
        first_p.style.display = "none"
    }
    if(second.length == 0){
        second_p.style.display = "block"
    }else{
        second_p.style.display = "none"
    }
    if(third.length == 0){
        third_p.style.display = "block"
    }else{
        third_p.style.display = "none"
    }

    if(first.length != 0 && second.length != 0 && third.length != 0){
        document.getElementById('name').value = '';
        document.getElementById('email2').value = '';
        document.getElementById('msg').value = '';
        setTimeout(confirm_fun,100);
        setTimeout(alert_fun2,100)
    }

    function confirm_fun(){
        check = confirm("هل انت متأكد من ارسال الرسالة بالبيانات الآتية:"+"\n"+
            first+":الاسم"+"\n"+
            second+":الايميل"+"\n"+
            third+":الرسالة");
    }
}

function alert_fun2(){
    if(check == true){
        setTimeout(suc,100);
    }else{
        setTimeout(fail,100);
    }
}

function suc(){
    alert("تم ارسال الرسالة بنجاح!");
}

function fail(){
    alert("تم إلغاء ارسال الرسالة");
}