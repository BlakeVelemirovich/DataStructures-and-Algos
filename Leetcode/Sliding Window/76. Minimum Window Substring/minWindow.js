var minWindow = function(s, t) {
    
    let stringHash = {};
    let matched = 0;
    let minWindowLen = Infinity;
    let windowStart = 0;

    for (i = 0; i < t.length; i++) {
        let leftChar = t[i];
        if (!(leftChar in stringHash)) {
            stringHash[leftChar] = 0;
        }
        stringHash[leftChar]++;
    }

    for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];

        if (rightChar in stringHash) {
            stringHash[rightChar]--;
        }

        if (stringHash[rightChar] === 0) {
            matched++;
        }

        while (matched >= t.length) {
            minWindowLen = Math.min(minWindowLen, windowEnd - windowStart + 1);
            if (s[windowStart] in stringHash) {
                if (stringHash[windowStart] === 0) {
                    matched--;
                }
                stringHash[s[windowStart]]++;
            }
            windowStart++;

        }
    }

    return minWindowLen;

};