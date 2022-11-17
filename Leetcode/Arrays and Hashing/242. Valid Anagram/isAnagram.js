var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let hashMap = {};

    for (i = 0; i < t.length; i++) {
        hashMap[t[i]] ? hashMap[t[i]]++ : hashMap[t[i]] = 1;
    }

    for (i = 0; i < s.length; i++) {
        if (hashMap[s[i]]) {
            hashMap[s[i]]--;
        }
        else {
            return false;
        }
    }
    return true;
};