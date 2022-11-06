var removeElement = function(nums, val) {
    let leftPointer = 0;

    for (rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] != val) {
            nums[leftPointer++] = nums[rightPointer];
        } 
    }
    return leftPointer;
};