function anagramFinder(arr, pattern) {
    let patternMap = {};
    let windowStart = 0;
    let matched = 0;
    let indices = [];

    //fill up our hashmap with the given anagram pattern
    for (i = 0; i < pattern.length; i++) {
        const currentChar = pattern[i];
        if (!(currentChar in patternMap)) {
            patternMap[currentChar] = 0;
        }
        patternMap[currentChar]++;
    }

    //iterate through our given string
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const rightChar = arr[windowEnd];
        //if we have a match then decrement it from our hashmap
        if (rightChar in patternMap) {
            patternMap[rightChar]--;
            if (patternMap[rightChar] === 0) {
                matched++;
            }
        }
        //check to see if we got an anagram and return the indice of the start location if so
        if (Object.keys(patternMap).length === matched) {
            indices.push(windowStart);
        }
        //shrink window once we have reached the pattern length and remove matches if needed
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
    }
    return indices;
}

console.log(anagramFinder('ppqp', 'pq'));
console.log(anagramFinder('abbcabc', 'abc'));