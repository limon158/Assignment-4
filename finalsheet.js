// Problem-1:
// 1. A function mindGame(){} take a positive number as input.
// 2. Multiply 3 with the input, then add 10, then devide by two, and then substract 5.
// 3. return the result.
function mindGame(num) {
  if (typeof num === "number" && num > 0) {
    const result = (num * 3 + 10) / 2 - 5;
    return result;
  } else {
    const error = "error:please enter a positive number!!";
    return error;
  }
}

// Problem-2:
// 1. A function evenOdd(){} take a string as input.
// 2. count total number of character in the string.
// 3. display 'even' if total number is even or display 'odd' if total number is odd.
function evenOdd(string) {
  if (typeof string === "string") {
    const totalChar = string.length;
    if (totalChar % 2 === 0) {
      const isEven = "even";
      return isEven;
    } else {
      const isOdd = "odd";
      return isOdd;
    }
  } else {
    const error = "error: please enter a string!!";
    return error;
  }
}

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

// Problem-5:
// 1. A function gemsToDiamond(){} take three numbers(gems number of three freinds) as input.
// 2. capacity of gems(1st freind) = 21;
// 3. capacity of gems(2nd freind) = 32;
// 4. capacity of gems(3rd freind) = 43;
// 5. find total how many diamond get everyone. if total number of diamond cross 1000 then substract 2000
// 6. display the result.
function gemsToDiamond(count1, count2, count3) {
  if (
    typeof count1 === "number" &&
    typeof count2 === "number" &&
    typeof count3 === "number"
  ) {
    const firstFreindPower = 21;
    const secondFriendPower = 32;
    const thirdFreindPower = 43;
    const firstFreindDiamond = count1 * firstFreindPower;
    const secondFriendDiamond = count2 * secondFriendPower;
    const thirdFreindDiamond = count3 * thirdFreindPower;
    const totalDiamond =
      firstFreindDiamond + secondFriendDiamond + thirdFreindDiamond;
    if (totalDiamond > 1000 * 2) {
      const everyoneGet = totalDiamond - 2000;
      return everyoneGet;
    } else {
      return totalDiamond;
    }
  } else {
    const error = "error: all input will be number !!";
    return error;
  }
}
