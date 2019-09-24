var x = prompt("operaciya + - * /", "+");
switch (x) {
case "+" : {
 var y = prompt("slagaemoe 1", "0");
 var z = prompt("slagaemoe 2", "0");
 alert(y + " + " + z + " = " + (Number(y) + Number(z)).toString());
}; break;
case "-" : {
 var y = prompt("umenwaemoe", "0");
 var z = prompt("vichitaemoe", "0");
 alert(y + " - " + z + " = " + (Number(y) - Number(z)).toString());
}; break;
case "*" : {
 var y = prompt("mnojimoe 1", "0");
 var z = prompt("mnojimoe 2", "0");
 alert(y + " * " + z + " = " + (Number(y)*Number(z)).toString()); 
}; break;
case "/" : {
 var y = prompt("delimoe", "0");
 var z = prompt("delitel", "0");
 alert(y + " / " + z + " = " + (Number(y)/Number(z)).toString());
}; break;
default : alert("vi nepravelno vveli"); break;
}