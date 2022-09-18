function permutationChecker(arr, pattern) {
    let patternMap = {};
    let windowStart = 0;
    let matched = 0;

    //generating hashmap to be used for checking pattern matches
    for (i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        if (!(char in patternMap)) {
            patternMap[char] = 0;
        }
        patternMap[char]++;
    }

    //sliding window algo, check each char against hashmap. If all value in hashmap is zero then it's a match
    for (windowEnd = 0; windowEnd < arr.length; windowEnd) {
        const rightChar = arr[windowEnd];
        //if there is a match decrement hashmap char and add to matched counter
        if (rightChar in patternMap) {
            patternMap[rightChar]--;
            if (patternMap[rightChar] === 0) {
                matched++;
            }
        }
        if (Object.keys(patternMap).length === matched) {
            return true;
        }

    }
}


console.log(`Permutation exist: ${permutationChecker('oidbcaf', 'abc')}`);