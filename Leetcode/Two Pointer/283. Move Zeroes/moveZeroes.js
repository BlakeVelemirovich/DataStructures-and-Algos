var moveZeroes = function(nums) {
    
    let leftPointer = 0;
    let temp = 0;
    
    for (rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] != 0) {
            temp = nums[rightPointer];
            nums[rightPointer] = nums[leftPointer];
            nums[leftPointer] = temp;
            leftPointer++;
        }
    }
};