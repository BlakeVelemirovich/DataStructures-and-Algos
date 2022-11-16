var containsDuplicate = function(nums) {
    // JavaScript map using set which is faster than object:
    var containsDuplicate = function(nums) {
        let hashMap = new Set(nums); 
        
        return hashMap.size !== nums.length;
    };
    
    //Object
    /* var containsDuplicate = function(nums) {
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
    }; */
};