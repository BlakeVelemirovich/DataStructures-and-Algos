var minSubArrayLen = function(target, nums) {
    let currentMinimumLength = Infinity;
    let windowStart = 0;
    let sum = 0;

    //Iterate through entire input array
    for (windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        //Sliding window algorithm, adding right most char to sum
        let rightChar = nums[windowEnd]; 
        sum += rightChar;

        //If we have met target, track smallest subarray that met target and then shrink window
        while (sum >= target) {
            currentMinimumLength = Math.min(currentMinimumLength, windowEnd - windowStart + 1);
            sum -= nums[windowStart];
            windowStart++;
        }

    }

    if (currentMinimumLength === Infinity) {
        return 0;
    }
    return currentMinimumLength;

};

console.log(minSubArrayLen(15, [1,2,3,4,5]));