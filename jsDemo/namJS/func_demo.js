// node jsDemo/namJS/func_demo.js

// function statement or function declaration
function a(){
	console.log("a called");
}

// function expression
var b = function () {
	console.log("b called");
}
a();
b();

// Anonymous function - function without name
// function () {
// 	console.log("b called");
// }

// named function expression
var b1 = function xyz() {
	console.log("named function called");
}
b1();
//xyz(); //ReferenceError: xyz is not defined

function add(x, y){ // x, y are called parameters
	 console.log(x+y);
}
add(2,3); //2,3 are arguments

//First class arguments
var c = function(param){
	return function (){

	}
	return function xyz(){

	}
}
console.log(c());

// arrow functions
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
console.log(materials.sort());