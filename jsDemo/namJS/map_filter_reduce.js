// node jsDemo/namJS/map_filter_reduce.js

const users = [
  {firstName: "satish", lastName: "kumar", age: 25},
  {firstName: "Raghu", lastName: "varma", age: 45},
  {firstName: "raju", lastName: "yadav", age: 40},
  {firstName: "deepika", lastName: "kona", age: 25},
];

console.log("------get firstName and lastName----");
let output = users.map((x) => x.firstName +" "+ x.lastName);
console.log(output);

console.log("------group by age----");
output = users.reduce(function(acc, curr) {
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  } else{
    acc[curr.age] = 1;
  }
  return acc;
},{});
console.log(output);

console.log("------get firstName of users whose age is less than 30----");
output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);