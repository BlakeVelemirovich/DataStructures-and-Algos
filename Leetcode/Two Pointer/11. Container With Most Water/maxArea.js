var maxArea = function(height) {
    let rightPointer = height.length - 1;
    let leftPointer = 0;
    let result = 0;

    while (leftPointer < rightPointer) {
        let area = (rightPointer - leftPointer) * Math.min(height[rightPointer], height[leftPointer]);
        result = Math.max(result, area);

        height[leftPointer] <= height[rightPointer] ? leftPointer++ : rightPointer--;
        
    }
    return result;
};