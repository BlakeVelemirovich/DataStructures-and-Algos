var removeDuplicates = function(nums) {
    let index = 1;
    
    // Since we have to rearrange the numbers inside of the array without allocating new memory 
    // we will sort unique characters to the front of the array and return the length of the unique chars subarray
    for (rightPointer = 1; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] != nums[rightPointer -1]) {
            nums[index++] = nums[rightPointer];
        }
    }
    return index;
};