function findMaxAverage(nums: number[], k: number): number {
  if (k > nums.length) return 0;
  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  tempSum = maxSum;
  for (let j = k; j < nums.length; j++) {
    tempSum = tempSum - nums[j - k] + nums[j];

    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum / k;
}

const nums = [1, 12, -5, -6, 50, 3],
  k = 4;

const res = findMaxAverage(nums, k);
console.log(res);
