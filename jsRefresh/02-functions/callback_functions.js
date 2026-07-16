const output = document.getElementById('output');

function logValue(value) {
  console.log(value);
}

const numbers = [1, 2, 3];
numbers.forEach(logValue);
output.textContent = "Callback executed for each number.";
