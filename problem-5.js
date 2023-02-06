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
const first = 100;
const second = 5;
const third = 1;
const display = gemsToDiamond(first, second, third);
console.log(display);
