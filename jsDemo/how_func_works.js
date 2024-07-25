// node jsDemo/how_func_works.js

// when js runs a program a call stack is created
//     then Global execution Context(GEC) is created and added to call stack. It creates 2 blocks Memory and code
// Phase1
//x: undefined | a{--} | b:{--}

// Phase2
//GEC -> var x = 1;
// GEC -> a() --> It creates 2 blocks Memory and code-->
         // x = undefined --> x =100; console.log(x) //100 is printed in console -> a() is removed from call stack
// GEC -> b() --> It creates 2 blocks Memory and code-->
         // x = undefined --> x =200; console.log(x) //200 is printed in console -> b() is removed from call stack
// GEC -> console.log(x) //1 is printed in console 
// GEC is cleared and removed
// call stack is removed
var x = 1; 
a();
b();
console.log(x);

function a(){
	var x = 100;
	console.log(x);
}

function b(){
	var x = 200;
	console.log(x);
}

// 100
// 200
// 1