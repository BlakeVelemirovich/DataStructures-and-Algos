var threeSum = function(nums) {
    nums.sort();

    let result = [];
    let target = 0;

    for (i = 0; i < nums.length - 2; i++) {
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;

        if (nums[i] > target) break;
        if (i > 0 && nums[i] === nums[leftPointer]) continue;

        while (leftPointer < rightPointer) {
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer];

            if (sum === target) {
                result.push(nums[i], nums[leftPointer], nums[rightPointer]);
                continue;
            }
            else if (sum > target) {
                leftPointer++;
            }
            else {
                rightPointer--;
            }
        }

    }
};