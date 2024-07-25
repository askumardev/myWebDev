//node jsDemo/let_const_var.js


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
console.log(str); //hello.. again 
var str = "new hello"; // we can create new variables with same name
console.log(str); //new hello 

// Scope: Function-scoped. A variable declared with var is available within the function it is declared in or 
//         globally if declared outside any function.
// Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Re-declaration: Can be re-declared within the same scope.
function varExample() {
  console.log(x); // undefined (due to hoisting)
  var x = 10;
  console.log(x); // 10
}
varExample();

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
// Scope: Block-scoped. A variable declared with let is only available within the block it is declared in 
//        (e.g., inside a loop or an if statement).
// Hoisting: Variables declared with let are hoisted to the top of their block but are not initialized until their
//           definition is evaluated.
// Re-declaration: Cannot be re-declared within the same scope.
function letExample() {
  //console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
  console.log(x); // 10
}
letExample();

console.log("========const========");
const str2 = "hello";
//str2 = "hello.. again";
console.log(str2);//TypeError: Assignment to constant variable.
// const str2 = "new hello";
// console.log(str2); //SyntaxError: Identifier 'str2' has already been declared

// Scope: Block-scoped. Similar to let, variables declared with const are only available within the block they 
//        are declared in.
// Hoisting: Variables declared with const are hoisted to the top of their block but are not initialized 
//           until their definition is evaluated.
// Re-declaration: Cannot be re-declared within the same scope.
// Immutability: Variables declared with const cannot be reassigned after their initial assignment. However, 
//               if the variable is an object or array, the contents of the object or array can still be modified.
function constExample() {
  //console.log(x);   //ReferenceError: Cannot access 'x' before initialization 
  const x = 10;
  console.log(x); // 10
  //x = 20; // TypeError: Assignment to constant variable.
}
constExample();
