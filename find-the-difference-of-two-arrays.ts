function findDifference(nums1: number[], nums2: number[]): number[][] {
    const l = Math.max(nums1.length, nums2.length);

    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    for (let i = 0; i < l; i++) {
        if (nums1[i] !== undefined) nums2Set.delete(nums1[i]);
        if (nums2[i] !== undefined) nums1Set.delete(nums2[i]);
    }

    return [Array.from(nums1Set), Array.from(nums2Set)];
}

const nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];
const res = findDifference(nums1, nums2);
console.log(res);
