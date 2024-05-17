function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      (right - left) * Math.min(height[left], height[right])
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

const height = [2, 3, 4, 5, 18, 17, 6];
console.log(maxArea(height));
