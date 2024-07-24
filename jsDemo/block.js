// node js/block.js

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b); 
  console.log(c);
}
console.log(a);
// console.log(b); //ReferenceError: b is not defined 
// console.log(c); ReferenceError: c is not defined
console.log("-----------------------")

var a = 100;
let b = 200;
const c = 300;
console.log(a);
console.log(b); 
console.log(c);
{
  var a = 10;
  let b = 20;
  // var b = 400; //SyntaxError: Identifier 'b' has already been declared 
  // Because b is already declared outside the block
  const c = 30;
  console.log(a);
  console.log(b); 
  console.log(c);
}
console.log(a);
console.log(b); 
console.log(c); 
