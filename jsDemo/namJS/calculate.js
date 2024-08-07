// node jsDemo/namJS/calculate.js

const radius = [1,2,3,4]

const area = function (radius) {
	return Math.PI * radius * radius;
};

const circumference = function (radius) {
	return 2 * Math.PI * radius;
};

const diameter = function (radius) {
	return 2 * radius;
};

const calculate = function (radius, logic) {
	const output = [];
	for(let i = 0; i < radius.length; i++){
		output.push(logic(radius[i]));
	}
	return output;
};
console.log("--------area--------");
console.log(calculate(radius, area));
console.log("--------circumference--------");
console.log(calculate(radius, circumference));
console.log("--------diameter--------");
console.log(calculate(radius, diameter));