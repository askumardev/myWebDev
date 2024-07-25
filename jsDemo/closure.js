// node jsDemo/closure.js

function a(){
  var a = 10;
  function y(){
    console.log(a);
  }
  y();
}
a();

function x(){
  var a = 10;
  function y(){
    console.log(a);
  }
  return y
}
var z = x();
console.log(z);