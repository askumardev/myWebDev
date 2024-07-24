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


console.log("========var========");
var str = "hello";
str = "hello.. again";
console.log(str);
var str = "new hello"; // we can create new variables with same name
console.log(str);
console.log("========let========");
if (true){
  let str = "str in if";
  console.log(str);
  let str1 = "inside if loop";
  console.log(str1);
  // let str1 = "new str1";// we will get SyntaxError: Identifier 'str1' has already been declared
  // console.log(str1);
}
//console.log(str1); // we  will get ReferenceError: str1 is not defined
//node js/main1.js

console.log("========const========");
const str2 = "hello";
//str2 = "hello.. again";
console.log(str2);//TypeError: Assignment to constant variable.
// const str2 = "new hello";
// console.log(str2); //SyntaxError: Identifier 'str2' has already been declared

const greeting = {
  message: "say Hi",
  times: 4
}
greeting.message = "say Hello instead";
console.log(greeting.message);