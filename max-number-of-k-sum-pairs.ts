function maxOperations(nums: number[], k: number): number {
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  nums.sort();
  while (left < right) {
    if (nums[left] + nums[right] === k) {
      count++;
      left++;
      right--;
    } else if (nums[left] + nums[right] < k) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}

let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
console.log(maxOperations(arr, 6));
