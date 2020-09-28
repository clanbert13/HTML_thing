/* eslint no-unused-vars: "error"*/
/* eslint-disable no-unused-vars */
/* eslint-env browser */

function Check(){
    var a = 10;
    var b = 20;
    var c = a + b;
    
    document.getElementById('check1').innerHTML = c;
    
    var x = "10";
    var y = "20";
    var z = x + y; 
    
    document.getElementById('check2').innerHTML = z;
    
    var z = "30";
    var result = a + b + z;
    
    document.getElementById('check3').innerHTML = result;
    
    var x = "100";
    var y = "10";
    var z = x / y;
    
    document.getElementById('check4').innerHTML = z;
    
    var z = x * y;
    
    document.getElementById('check5').innerHTML = z;
    
    var z = x - y;
    
    document.getElementById('check6').innerHTML = z;
    
    var z = x + y;
    
    document.getElementById('check7').innerHTML = z;
    
}
