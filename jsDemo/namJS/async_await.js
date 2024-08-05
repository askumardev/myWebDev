// function api() {
// 	return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sample data...");
//       resolve(200);
//     }, 2000);
// 	});
// }

// async function getInfo() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }

(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})(); //IIFE


function getData(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", id);
      resolve("success");
    }, 2000);
  })
  
}

//getInfo() in console