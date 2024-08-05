const URL = "https://cat-fact.herokuapp.com/facts";
const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  fact.innerText = data[0].text;  
};

// function getFacts() {
//   fetch(URL).then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     fact.innerText = data[0].text; 
//   });
// }

//getFacts();
btn.addEventListener("click", getFacts);