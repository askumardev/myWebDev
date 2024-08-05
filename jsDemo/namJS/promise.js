// node jsDemo/namJS/promise.js


let promise = new Promise((resolve, reject) => {
  console.log("calling promise..");
 // resolve("success");
  reject("something wrong happened");

})

console.log(promise);