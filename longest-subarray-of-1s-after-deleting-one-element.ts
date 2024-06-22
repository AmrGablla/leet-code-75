function longestSubarray(nums: number[]): number {
  let maxLength = 0,
    count = 0,
    longestOnes = 0;

  for (const num of nums) {
    if (num) {
      count++;
      maxLength = Math.max(maxLength, count + longestOnes);
    } else {
      longestOnes = count;
      count = 0;
    }
  }
  return Math.min(maxLength, nums.length - 1);
}


// 0 1 1 1 1 1 0 1
//   1 2 3 4 5 5 