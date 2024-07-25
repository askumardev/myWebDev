// node jsDemo/closure.js

// lexical env is the local memory along with its lexical env of its parent

function a(){
  console.log(x);
}
var x = 10;
a();

console.log("------a1 x1 c1--------");
//a1 is lexically inside global scope and c1 is lexically inside a1
// c1 -->  a1 --> global -->null
function a1(){
  var x1 = 110; 
  c1();
  function c1(){
    console.log(x1); 
    //JS engine tries to find x1 in local memory of c1(). Then JS engine tries to find x1 in a1()
  }  
}
a1();

console.log("-----a2 x2 c2---------");
function a2(){
  c2();
  function c2(){
    //console.log(x2) // Uncaught ReferenceError: x2 is not defined
  }  
}
a2();

// function x(){
//   var a = 10;
//   function y(){
//     console.log(a);
//   }
//   return y
// }
// var z = x();
// console.log(z);