// node js/callback.js

setTimeout(function (){
  console.log("timer");
}, 4000);

function x(y){
  console.log("calling x");
  y();
}

x(function y(){
  console.log("calling y");
});