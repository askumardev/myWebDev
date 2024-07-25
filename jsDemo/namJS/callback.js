// node jsDemo/callback.js

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

function attachEventListener(){
  let count  = 0;

  document.getElementById("clickMe").addEventListener("click", function myFun() {
    console.log("clicked..",++count)
  });
}
attachEventListener();