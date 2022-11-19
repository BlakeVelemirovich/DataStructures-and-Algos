var topKFrequent = function(nums, k) {
    let map =  new Map()

    nums.forEach(num => {
      map.set(num, map.get(num) + 1 || 1);
    });

    let sortedArray = [];

    for (let [key, value] of map) {
      sortedArray.push([key, value]);
    }

    sortedArray.sort((a, b) => b[1] - a[1]);

    let result = [];
    
    for (i = 0; i < k; i++) {
      result.push(sortedArray[i][0]);
    }
    
return result;
};