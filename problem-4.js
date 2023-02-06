// Problem-4:
// 1. A function findingBadData(){} take a array as input.
// 2. There have many mixed positive and negative numbers in the array.
// 3. Positive number will be called 'Good Data' and negative number will be called 'Bad Data'.
// 4. Now find how many bad data exist in the array?.
function findingBadData(dataSet) {
  const type = Array.isArray(dataSet);
  if (type === true) {
    let badData = [];
    for (let i = 0; i < dataSet.length; i++) {
      const element = dataSet[i];
      if (element < 0) {
        badData.push(element);
      }
    }
    const totalBadData = badData.length;
    return totalBadData;
  } else {
    const error = "error: please enter an array!!";
    return error;
  }
}
const myArr = [-4, -9, -5, -33, -55];
const display = findingBadData(myArr);
console.log(display);
