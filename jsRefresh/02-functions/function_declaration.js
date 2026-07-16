const output = document.getElementById('output');

function greet(name) {
  return `Hello ${name}`;
}

output.textContent = greet("Alex");
console.log(greet("Alex"));
