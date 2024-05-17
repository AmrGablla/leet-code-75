function increasingTriplet(nums: number[]): boolean {
    let min: number = Number.MAX_SAFE_INTEGER;
    let secondMin: number = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (current <= min) {
            min = current;
            // continue;
        } else if (current <= secondMin) {
            secondMin = current;
            // continue;
        } else {
            return true;
        }
        // current is greater then min
        // current is greater than second min
        // we found an increasing triplet
        // return true;
    }
    return false;
};

console.log(increasingTriplet([6, 7, 1, 2]));
