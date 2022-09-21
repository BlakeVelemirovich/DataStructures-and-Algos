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
        //checking to see if our number of matches equal the total number of saved keys, if so we have a permutation
        if (Object.keys(patternMap).length === matched) {
            return true;
        }
        //shrink window if it is larger than the given pattern
        if (windowEnd >= pattern.length - 1) {
            const leftChar = arr[windowStart];
            windowStart++;
            if (leftChar in patternMap) {
                if (patternMap[leftChar] === 0) {
                    matched--;
                }
                patternMap[leftChar]++;
            }
    }
    return false;
}


console.log(`Permutation exist: ${permutationChecker('oidbcaf', 'abc')}`);