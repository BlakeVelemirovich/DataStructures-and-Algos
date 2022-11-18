var groupAnagrams = function(strs) {
    let hashMap = {};

    strs.forEach(word => {
        let sortedWord = word.split("").sort().join("");
        
        hashMap[sortedWord] ? hashMap[sortedWord].push(word) : hashMap[sortedWord] = [word];
    });

    return Object.values(hashMap);
};