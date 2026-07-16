const output = document.getElementById('output');

const nums = [1, 2, 3];
const copy = [...nums];
const more = [...nums, 4];

output.textContent = JSON.stringify({ copy, more });
console.log(copy, more);
