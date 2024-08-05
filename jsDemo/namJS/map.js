// node jsDemo/namJS/map.js

const arr = [5,1,3,2,6];

console.log("------arr double----");
function double(x) {
  return x * 2;
}

let output = arr.map(double);
console.log(output);

console.log("------arr triple----");
// function triple(x) {
//   return x * 3;
// }

output = arr.map((x) => x * 3);
console.log(output);

// function binary(x) {
//   return x.toString(2);
// }
// output = arr.map(binary);
// console.log(output);

console.log("------arr to binary----");
output = arr.map(function binary(x){
  return x.toString(2);
});
console.log(output);