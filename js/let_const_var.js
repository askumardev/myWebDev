//node js/let_const_var.js


// console.log(y); //ReferenceError: y is not defined  
console.log(a); //undefined
//console.log(b); //ReferenceError: Cannot access 'b' before initialization
//console.log(c); ReferenceError: Cannot access 'c' before initialization 

var a = 10;
// var a = 15; //No error
let b = 20;
//let b = 40; SyntaxError: Identifier 'b' has already been declared
const c = 30;
// const c = 50; //SyntaxError: Identifier 'c' has already been declared 
// const d; SyntaxError: Missing initializer in const declaration
// d=100;
// console.log(d);

console.log(a);
console.log(b); 
console.log(c);

b = 100; 
console.log(b);

// c = 200; //TypeError: Assignment to constant variable.
// console.log(c);

