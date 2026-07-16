const output = document.getElementById('output');

const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0);

output.textContent = evens.join(", ");
console.log(evens);
