function findSubString(arr, pattern) {
    let patternMap = {};
    let matched = 0;
    let smallestSubStringLength = arr.length + 1;
    let windowStart = 0;
    let smallestSubStringStart = 0;
  
    //generate our hashmap to be used to check pattern matches
    for (i = 0; i < pattern.length; i++) {
      const currentChar = pattern[i];
      if (!(currentChar in patternMap)) {
        patternMap[currentChar] = 0;
      }
      patternMap[currentChar]++;
    }
  
    //loop through our given string checking for matches
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      const rightChar = arr[windowEnd];
      if (rightChar in patternMap) {
        patternMap[rightChar]--;
        if (patternMap[rightChar] >= 0) {
          matched++;
        }
      }
  
      //if we have a complete map, check if our current window is the smallest and shrink the window
      while (matched === pattern.length) {
        if (smallestSubStringLength > windowEnd - windowStart + 1) {
          smallestSubStringLength = windowEnd - windowStart + 1;
          smallestSubStringStart = windowStart;
        }
  
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
    //if there is no substring that matches our pattern then we return nothing
    if (smallestSubStringLength > arr.length) {
      return '';
    }
    //return the start and end indices of our smallest substring
    return arr.substring(smallestSubStringStart, smallestSubStringStart + smallestSubStringLength);
  }
  
  console.log(findSubString('aabdec', 'abc'));
  console.log(findSubString('aabdec', 'abac'));
  console.log(findSubString('abdbca', 'abc'));
  console.log(findSubString('adcad', 'abc'));  