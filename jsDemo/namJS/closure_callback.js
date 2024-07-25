// node jsDemo/namJS/closure_callback.js


function x(){
  for(var i =1; i<=5; i++){
    function close(x){
      setTimeout(function (){
        console.log(x);
      }, i * 1000);
    }
    close(i);
  }
}
x();


// function x(){
//   for(let i =1; i<=5; i++){
//     setTimeout(function (){
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();