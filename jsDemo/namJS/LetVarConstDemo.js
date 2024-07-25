//node jsDemo/LetVatConstDemo.js

var a1 = 10;
let b1 = 20;
const c1 = 30;
console.log("-----------sum of a var and let var-----");
console.log(a1 + b1);
console.log("-----------sum of a var and const var-----");
console.log(a1 + c1);
console.log("-----------sum of a const and let var-----");
console.log(b1 + c1);


const greeting = {
  message: "say Hi",
  times: 4
}
greeting.message = "say Hello instead";
console.log(greeting.message);

//we onserve that after loading 
   //window.a1 and this.a1 is 10
   //window.b1 and this.b1 is undefined
   //window.c1 and this.c1 is undefined