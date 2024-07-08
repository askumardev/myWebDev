//node js/main1.js

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