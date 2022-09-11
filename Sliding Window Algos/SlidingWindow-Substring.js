function longestSubstringWithDistinctChar(k, arr) {

    let windowStart = 0;
    let maxSubArrayLength = 0;
    let stringHash = {};
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      const rightChar = arr[windowEnd];
  
      if (!(rightChar in stringHash)) {
        stringHash[rightChar] = 0;
      }
      stringHash[rightChar]++;
  
      while (Object.keys(stringHash).length > k) {
        let leftChar = arr[windowStart];
              
        stringHash[leftChar]--;
        
        if (stringHash[leftChar] === 0) {
            delete stringHash[leftChar];
        }
              
        windowStart++;
      }
      
      maxSubArrayLength = Math.max(maxSubArrayLength, windowEnd - windowStart + 1);
  
    }
  
    return maxSubArrayLength;
  }
  
  console.log(longestSubstringWithDistinctChar(2, 'araaci'));
  