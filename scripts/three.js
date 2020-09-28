/* eslint no-unused-vars: "error"*/
/* eslint-disable no-unused-vars */
/* eslint-env browser */
var text;

function For()
{
    var array = ["jesus", "chris", "jeremy", "anton", "zoshua"];
    var text = "<ul>";
    for(var i = 0; i < array.length; ++i)
    {
        text += "<li>" + array[i] + "</li>";    
    }
    text += "</ul>";
    
    document.getElementById('for').innerHTML = text;
}

function Foreach()
{
    var array = ["jeremy", "zoshua", "chris", "anton", "jesus"];
    text = "<ul>";
    name.forEach(myFunction);
    text += "</ul>";
    
    document.getElementById('foreach').innerHTML = text;
}
