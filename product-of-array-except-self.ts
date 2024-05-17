function productExceptSelf(nums: number[]): number[] {
  var front: number[] = [];
  var back: number[] = [];

  front[0] = 1;

  back[nums.length - 1] = 1;

  for (var i = 1; i < nums.length; i++) {
    front[i] = nums[i - 1] * front[i - 1];
  }

  for (var i = nums.length - 2; i >= 0; i--) {
    back[i] = nums[i + 1] * back[i + 1];
  }

  for (var i = 0; i < front.length; i++) {
    nums[i] = front[i] * back[i];
  }
  return nums;
}

// using Finding Prefix Product and Suffix Product
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
