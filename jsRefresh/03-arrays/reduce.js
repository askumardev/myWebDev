const output = document.getElementById('output');

const nums = [1, 2, 3];
const total = nums.reduce((sum, n) => sum + n, 0);

output.textContent = total;
console.log(total);
