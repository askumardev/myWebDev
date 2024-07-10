// Hoisting as a core concept relies on the way how Execution Context is created. 
// In the first phase i.e. the Memory Allocation Phase all the variables and functions are allocated memory, 
// even before any code is executed. All the variables are assigned undefined at this 
//point in time in the local memory.

//node js/hoisting.js

function myFun() {
  console.log("Hi");
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clickMe").addEventListener("click", myFun);
});
getName();
console.log(x);
console.log(getName);

var x = 7;

function getName(){
  console.log("Hello World");
}

getName();
console.log(x);
console.log(getName);

a();
b();
c();
d();

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
function c() {
  var y = 11;
  console.log(x);
}
console.log(this.y);

function d() {
  x = 111;
  console.log(x);
}
console.log(x);