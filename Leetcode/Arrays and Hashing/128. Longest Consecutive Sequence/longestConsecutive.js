var longestConsecutive = function(nums) {
    const uniqueNums = new Set(nums);
    let highestSequence = 0;

    for (let num of uniqueNums) {
        if (!(uniqueNums.has(num - 1))) {
            let counter = 1;
            while (uniqueNums.has(num + counter)) {
                counter++;
            }
            highestSequence = Math.max(highestSequence, counter);
        };
    }
    return highestSequence;
};