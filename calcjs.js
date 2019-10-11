var outp = document.querySelector("th");
var mas = document.querySelectorAll("td");
var a = NaN, b = NaN, c = NaN;
document.body.addEventListener("mousemove", fm);
function fm(event) {
 event.preventDefault(); 
}
mas[0].addEventListener("click", f7);
mas[1].addEventListener("click", f8);
mas[2].addEventListener("click", f9);
mas[3].addEventListener("click", f_1);
mas[4].addEventListener("click", f4);
mas[5].addEventListener("click", f5);
mas[6].addEventListener("click", f6);
mas[7].addEventListener("click", f_2);
mas[8].addEventListener("click", f1);
mas[9].addEventListener("click", f2);
mas[10].addEventListener("click", f3);
mas[11].addEventListener("click", f_3);
mas[12].addEventListener("click", f0);
mas[13].addEventListener("click", fz);
mas[14].addEventListener("click", fc);
mas[15].addEventListener("click", f_4);
mas[16].addEventListener("click", f_5);
function f7() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "7";
 }
}
function f8() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "8";
 }
}
function f9() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "9";
 }
}
function f_1() {
 var x = outp.textContent;
}
function f4() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "4";
 }
}
function f5() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "5";
 }
}
function f6() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "6";
 }
}
function f_2() {
 var x = outp.textContent;
}
function f1() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "1";
 }
}
function f2() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "2";
 }
}
function f3() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "3";
 }
}
function f_3() {
 var x = outp.textContent;
}
function f0() {
 var x = outp.textContent;
 if (!((x.length > 11) || ((x.length == 1) && (x.indexOf("0") == 0)))) {
  outp.textContent = x + "0";
 }
}
function fz() {
 var x = outp.textContent;
 if ((!x.includes(",")) && (x != "") && !(x.length > 11))
  outp.textContent = x + ",";
}
function fc() {
 outp.textContent = "";
}
function f_4() {
 var x = outp.textContent;
}
function f_5() {
 var x = outp.textContent;
}