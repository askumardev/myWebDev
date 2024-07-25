// node jsDemo/block.js


console.log("--------block scope---------------")
{
  var a = 10; //Global scope
  let b = 20; //Block scope
  const c = 30; //block scope
  console.log(a);
  console.log(b); 
  console.log(c);
}
console.log(a);
// console.log(b); //ReferenceError: b is not defined 
// console.log(c); ReferenceError: c is not defined
console.log("--------Shadowing---------------")

var a1 = 100;
let b1 = 200;
const c1 = 300;
// console.log(a1);
// console.log(b1); 
// console.log(c1);
{
  var a1 = 10; //shadowing occuers
  let b1 = 20;
  // var b = 400; //SyntaxError: Identifier 'b' has already been declared 
  // Because b is already declared outside the block
  const c1 = 30;
  console.log("---inside block-----")
  console.log(a1);
  console.log(b1); 
  console.log(c1);
}
console.log("---outside block-----")
console.log(a1);// same global memory space and shadowing 10 is rendered
console.log(b1); 
console.log(c1); 

// console.log("---illegal shadowing-----")
// let b2 = 200;
// {
//   var b2 = 10; 
// }