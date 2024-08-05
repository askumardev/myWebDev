// node jsDemo/namJS/promise.js


// let promise = new Promise((resolve, reject) => {
//   console.log("calling promise..");
//  // resolve("success");
//   reject("something wrong happened");

// })

// console.log(promise);


function getData(id, getNextData){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", id);
      resolve("success");
      if (getNextData){
        getNextData();
      } 
    }, 5000);
  });  
}
//let final = getData(123); in console and check final