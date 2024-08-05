// node jsDemo/namJS/callback.js

console.log("calling one");
console.log("calling two");
const hello = () => { console.log("hello..")};
setTimeout(hello, 3000); //passing function as an argument in another function
console.log("calling three");

// function attachEventListener(){
//   let count  = 0;

//   document.getElementById("clickMe").addEventListener("click", function myFun() {
//     console.log("clicked..",++count)
//   });
// }
// attachEventListener();