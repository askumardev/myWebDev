//node js/let_const_var.js

console.log(a);
//console.log(b); //ReferenceError: Cannot access 'b' before initialization
//console.log(c); ReferenceError: Cannot access 'c' before initialization 

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b); 
console.log(c);

// let a = 100; //SyntaxError: Identifier 'a' has already been declared 
// console.log(a);

