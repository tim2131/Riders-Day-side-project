var conuter = 1;
setInterval(function(){
    document.getElementById('radio' + conuter).checked = true;
    conuter++;
    if(conuter>3){
        conuter=1
    }
},6000);