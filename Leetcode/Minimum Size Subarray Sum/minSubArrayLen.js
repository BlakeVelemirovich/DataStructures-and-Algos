var minSubArrayLen = function(target, nums) {
    let currentMinimumLength = Infinity;
    let windowStart = 1;
    let sum = 0;

    for (windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        let rightChar = nums[windowEnd]; 
        sum += rightChar;

        while (sum >= target) {
            currentMinimumLength = Math.min(currentMinimumLength, windowEnd - windowStart + 1);
            sum -= nums[windowStart];
            windowStart++;
        }

    }

    return currentMinimumLength;

};