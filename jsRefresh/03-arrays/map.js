const output = document.getElementById('output');

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);

output.textContent = doubled.join(", ");
console.log(doubled);
