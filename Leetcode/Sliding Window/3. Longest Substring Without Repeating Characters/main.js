var lengthOfLongestSubstring = function(s) {
    let windowStart = 0;
    let repeatedCharsMap = {};
    let longestSubStringLen = 0;

    //Iterate through the entire provided string
    for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
        //Sliding window, keep track of right most added char in our hashmap
        let rightChar = s[windowEnd];
        if (!(rightChar in repeatedCharsMap)) {
            repeatedCharsMap[rightChar] = 0;
        }
        repeatedCharsMap[rightChar]++;

        //If we have a repeated char shrink the window on the left side until no more repeated chars
        while (repeatedCharsMap[rightChar] > 1) {
            let leftChar = s[windowStart];
            repeatedCharsMap[leftChar]--;
            windowStart++;
        }

        //Keep track of our largest subarray up until this point
        longestSubStringLen = Math.max(longestSubStringLen, windowEnd - windowStart + 1);

    }

    return longestSubStringLen;
};