var containsDuplicate = function(nums) {
    var containsDuplicate = function(nums) {
        let hashMap = {};
        
        for (i = 0; i < nums.length; i++) {
            if (hashMap[nums[i]] === undefined) {
                hashMap[nums[i]] = i;
            } 
            else {
                return true;
            }
        }
        return false;
    };
};