let base1=(6+4)/2*5;
let base2=(7+3)/2*4;
let height=(5+9)/2*6;
let area=(6+4)/2*5;
function myFunction() {
  base1=document.getElementById("my-text").value;
   base2=document.getElementById("b-text").value;
    height=document.getElementById("h-text").value;
    base1=parseInt(base1,10);
     base2=parseInt(base2,10);
      height=parseInt(height,10);
  trapezoid=(base1+base2)/2*height;
  alert(trapezoid);
}
function iFunction() {
  let trapezoid = document.getElementById("my-text").value;
  document.getElementById("demo").innerHTML = trapezoid;
}