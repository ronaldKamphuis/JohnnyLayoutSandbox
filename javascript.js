function display_c(){

var refresh=1000;
mytime=setTimeout('display_ct()',refresh)

}

function display_ct() {

var x = new Date()
var x1=x.toUTCString();// changing the display to UTC string
document.getElementById('ct').innerHTML = x1;
display_c();

}