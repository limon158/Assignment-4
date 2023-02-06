// Problem-2:
// 1. A function evenOdd(){} take a string as input.
// 2. count total number of character in the string.
// 3. display 'even' if total number is even or display 'odd' if total number is odd.
function evenOdd(string) {
  if (typeof string === "string") {
    const totalChar = string.length;
    if (totalChar % 2 === 0) {
      const isEven = 'even';
      return isEven;
    } else {
      const isOdd = 'odd';
      return isOdd;
    }
  } else {
    const error = "error: please enter a string!!";
    return error;
  }
}
const myString = 'Phero';
const display = evenOdd(myString);
console.log(display);
