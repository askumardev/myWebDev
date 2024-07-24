// node js/script.js

messaging('Hello...')
messaging(5)
messaging('something')
message = 'abcd'
messaging(message)

function messaging(message){
  console.log(message)
}

var a;
console.log(a);
if(a === undefined){
  console.log("a is undefined")
} else {
  console.log("a is not undefined")
}
