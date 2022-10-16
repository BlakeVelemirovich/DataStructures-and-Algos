var minSubArrayLen = function(target, nums) {
    let currentMinimumLength;
    let windowStart = 1;
    let sum = 0;

    for (windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        let rightChar = nums[windowEnd]; 
        sum += rightChar;

        if (rightChar >= k) {
            currentMinimumLength = Math.min(currentMinimumLength, windowEnd - windowStart + 1);
        }

    }

};