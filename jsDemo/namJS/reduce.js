// node jsDemo/namJS/reduce.js

const arr = [5,1,3,2,6];

console.log("------using normal function----");
function Sum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum
}
console.log(Sum(arr));

console.log("------using reduce function----");
let output = arr.reduce(function(acc, curr){
  acc = acc + curr;
  return acc;
});
console.log(output);

console.log("------findMax using normal function----");
function findMax(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }    
  }
  return max
}
console.log(findMax(arr));

console.log("------findMax using reduce function----");
output = arr.reduce(function(max, curr){
  if(curr > max){
    max = curr;
  }
  return max;
}, 0);
console.log(output);
