var findMin = function(nums) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let midPointer;

    while (leftPointer < rightPointer) {
        midPointer = ~~((leftPointer + rightPointer) / 2);
        nums[midPointer] > nums[rightPointer] ? leftPointer = midPointer + 1 : rightPointer = midPointer;
    }
    return nums[leftPointer];
};