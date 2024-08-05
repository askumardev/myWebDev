const getPromise1 = () => {
  return new Promise((resolve, reject) => {
    console.log("calling a promise1");
    resolve("success");
  });
};

const getPromise2 = () => {
  return new Promise((resolve, reject) => {
    console.log("calling a promise2");
    reject("error");
  });
};

let promise1 = getPromise1();
promise1.then((res) => {
  console.log("promise1 fulfilled", res);
});

let promise2 = getPromise2();
promise2.catch((err) => {
  console.log("promise2 rejected", err);
});
