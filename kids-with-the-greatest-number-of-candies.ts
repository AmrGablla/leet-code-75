function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let biggestNumber = Math.max(...candies);
  return candies.map((el) => el + extraCandies >= biggestNumber);
}

// first submtion

// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   let biggestNumber = getTheBiggerNumber(candies);
//   let result: boolean[] = [];
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= biggestNumber) {
//       result[i] = true;
//     } else {
//       result[i] = false;
//     }
//   }
//   return result;
// }

// function getTheBiggerNumber(input: number[]): number {
//   let result = input[0];
//   for (let i = 0; i < input.length; i++) {
//     const element = input[i];
//     if (element > result) {
//       result = element;
//     }
//   }
//   return result;
// }

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
