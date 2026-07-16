const output = document.getElementById('output');

const nums = [10, 20, 30];
const result = nums.find(n => n > 15);

output.textContent = result;
console.log(result);
