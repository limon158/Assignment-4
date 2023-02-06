// Problem-3:
// A function isLGSeven(){} take a number as input.
// find difference between input value and seven.
// if the difference less than 7, return the difference value.
// if the difference 7 or greater, display double of input value.
function isLGSeven(num) {
  if (typeof num === "number") {
    const diffBTSeven = num - 7;
    if (diffBTSeven < 7) {
      return diffBTSeven;
    } else {
      const double = num * 2;
      return double;
    }
  } else {
    const error = "error:please enter a number!!";
    return error;
  }
}
const myNum = 6;
const display = isLGSeven(myNum);
console.log(display);
