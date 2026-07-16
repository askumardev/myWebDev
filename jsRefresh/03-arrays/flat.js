const output = document.getElementById('output');

const nested = [1, [2, [3]]];
const flat = nested.flat(2);

output.textContent = flat.join(", ");
console.log(flat);
