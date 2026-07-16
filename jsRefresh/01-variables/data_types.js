const output = document.getElementById('output');

const numberValue = 10;
const stringValue = "hello";
const isReady = true;

const example = `numberValue: ${numberValue}
stringValue: ${stringValue}
isReady: ${isReady}`;

output.textContent = example;
console.log(example);
