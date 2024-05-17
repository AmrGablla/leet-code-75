/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let firstNonZeroIndex = 0; 

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element !== 0) {
      nums[firstNonZeroIndex++] = element;
    }
  }

  for (let j = firstNonZeroIndex; j < nums.length; j++) {
    nums[j] = 0;
  }
}

const input = [0, 1, 0, 3, 12];
moveZeroes(input);
console.log(input);
