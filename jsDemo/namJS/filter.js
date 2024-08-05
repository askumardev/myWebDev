// node jsDemo/namJS/filter.js

const arr = [5,1,3,2,6];

console.log("------isOdd filter----");
function isOdd(x){
  return x % 2;
}

let output = arr.filter(isOdd);
console.log(output);

console.log("------isEven filter----");
function isEven(x){
  return x % 2 === 0;
}

output = arr.filter(isEven);
console.log(output);

console.log("------greater4 filter----");
output = arr.filter(function greater4(x){
  return x > 4;
});
console.log(output);

console.log("------arrow function to show less than 4 filter----");
output = arr.filter((x) => {
  return x < 4;
});
console.log(output);