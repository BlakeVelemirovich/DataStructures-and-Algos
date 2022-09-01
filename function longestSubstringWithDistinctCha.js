function longestSubstringWithDistinctChars(arr) {
    
    let maxSubstring = 0;
    let windowStart = 0;
    let stringHash ={};

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const rightChar = arr[windowEnd];

        if (rightChar in stringHash) {
            windowStart = Math.max(windowStart, windowEnd);

        }
        
        stringHash[rightChar] = windowEnd;
        maxSubstring = Math.max(maxSubstring, windowEnd - windowStart + 1);
    }

    return maxSubstring;
}

console.log(longestSubstringWithDistinctChars("aabccbb"));