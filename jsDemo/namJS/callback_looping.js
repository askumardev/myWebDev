// node jsDemo/namJS/callback_looping.js


// function getData(id){
//   setTimeout(() => {
//     console.log("data:" ,id);
//   }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);
//Above executes the all the 3 getData after 2 seconds

function getData(id, getNextData){
  setTimeout(() => {
    console.log("data:", id);
    if (getNextData){
      getNextData();
    }   
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3);
  })
});
