// Problem-1:
// 1. A function mindGame(){} take a positive number as input.
// 2. Multiply 3 with the input, then add 10, then devide by two, and then substract 5.
// 3. return the result.
function mindGame(num) {
  if (typeof num === 'number' && num > 0) {
    const result = (num * 3 + 10) / 2 - 5;
    return result;
  } else {
    const error = "error:please enter a positive number!!";
    return error;
  }
}
const myNum = 5;
const display = mindGame(myNum);
console.log(display);
