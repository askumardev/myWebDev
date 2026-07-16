const output = document.getElementById('output');

const greet = function(name) {
  return `Hello ${name}`;
};

output.textContent = greet("Sam");
console.log(greet("Sam"));
