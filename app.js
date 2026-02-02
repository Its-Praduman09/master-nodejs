// const math = require("./math");
// console.log(math);  output:  { add: [Function: add], subtract: [Function: subtract] }

const { subtract, add } = require("./math");
const result = subtract(5, 3);
console.log(`The difference is: ${result}`);

const sum = add(90, 10);
console.log(`The sum is: ${sum}`);
