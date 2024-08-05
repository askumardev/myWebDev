// node jsDemo/namJS/async.js

console.log("calling one");
console.log("calling two");
setTimeout(function (){
  console.log("timer1");
}, 2000);
setTimeout(() => {
  console.log("timer2");
}, 1000);
console.log("calling three");