var maxArea = function(height) {
    let rightPointer = height.length - 1;
    let leftPointer = 0;
    let result = 0;

    while (leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            lineHeight = height[leftPointer];
        }
        else {
            lineHeight = height[rightPointer];
        }
        result = Math.max(result, width * lineHeight);

        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        }
        else if (height[leftPointer] > height[rightPointer]) {
            rightPointer--;
        }
        else if (height[leftPointer + 1] > height[rightPointer + 1]) {
            leftPointer++;
        }
        else {
            rightPointer--;
        }
        
    }
    return result;
};
