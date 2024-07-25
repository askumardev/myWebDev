// When a Global Execution Context is created, a global object window and this keyword is created in JS. 

// JavaScript Engine creates a global object whenever you run any JS code. In the case of browsers, this global object 
// is known as window, check out the video to see the demo of this global object created by the browser.

console.log(this === window); // at global level

var a = 10;
function b(){
	var x = 20;
}
console.log(this.a);
console.log(a);
console.log(window.a);
//console.log(x); //namJs.js:15 Uncaught ReferenceError: x is not defined