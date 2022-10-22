var minWindow = function(s, t) {
    
    let stringHash = {};

    for (i = 0; i < t.length; i++) {
        if (!(t[i] in stringHash)) {
            stringHash[t[i]] = 0;
        }
        stringHash[t[i]]++;
    }
};