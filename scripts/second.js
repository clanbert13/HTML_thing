/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */
/* eslint-env browser */

function Check() {
 var x = 10;
 var y = 20;
 var z = x + y;

     document.getElementById('check1').innerHTML = z;

 var x = "10";
 var y = "20";
 var z = x + y;
document.getElementById('check2').innerHTML = z;

 var x = 10;
 var y = 20;
 var z = "30";
 var result = x + y + z;
document.getElementById('check3').innerHTML = result;
 
 var x = "100";
 var y = "10";
 var z = x / y;
document.getElementById('check4').innerHTML = z;

 var x = "100";
 var y = "10";
 var z = x * y;
document.getElementById('check5').innerHTML = z;

 var x = "100";
 var y = "10";
 var z = x - y;
 document.getElementById('check6').innerHTML = z;

 var x = "100";
 var y = "10";
 var z = x + y;
 document.getElementById('check7').innerHTML = z;
}
