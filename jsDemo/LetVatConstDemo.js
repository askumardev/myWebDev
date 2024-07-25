//node jsDemo/LetVatConstDemo.js

var a = 10;
let b = 20;
const c = 30;
console.log(a+b);
console.log(a+c);
console.log(b+c);

console.log("----------var------------------");
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

console.log("----------let------------------");
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


console.log("----------const------------------");
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
