function lengthOfLongestSubArray(arr, k) {

    let maxOnes = 0;
    let windowStart = 0;
    let maxSubArray = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        if (arr[windowEnd] === 1) {
            maxOnes++;
        }
        
        if ((windowEnd - windowStart + 1) - maxOnes > k) {
            if (arr[windowStart === 1]) {
                maxOnes--;
            }
            windowStart++;
        }

        maxSubArray = Math.max(maxSubArray, windowEnd - windowStart + 1);
    }

    return maxOnes;
}

console.log(lengthOfLongestSubArray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));