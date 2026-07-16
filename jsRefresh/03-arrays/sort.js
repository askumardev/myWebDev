const output = document.getElementById('output');

const nums = [30, 10, 20];
const sorted = [...nums].sort((a, b) => a - b);

output.textContent = sorted.join(", ");
console.log(sorted);
