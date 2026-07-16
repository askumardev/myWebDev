const output = document.getElementById('output');

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

output.textContent = doubled.join(", ");
console.log(doubled);
