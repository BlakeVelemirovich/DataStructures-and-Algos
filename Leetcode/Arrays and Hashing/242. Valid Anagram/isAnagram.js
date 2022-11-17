var isAnagram = function(s, t) {
    let hashMap = {};
    let matched = 0;

    for (i = 0; i < t.length; i++) {
        if (!(t[i] in hashMap)) {
            hashMap[t[i]] = 0;
        }
        hashMap[t[i]]++;
    }

    for (i = 0; i < s.length; i++) {
        if (s[i] in hashMap) {
            hashMap
        }
    }

};