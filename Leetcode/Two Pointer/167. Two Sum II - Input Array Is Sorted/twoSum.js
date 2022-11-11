var twoSum = function(numbers, target) {
    let rightPointer = numbers.length - 1;
    let leftPointer = 0;

    while (leftPointer < rightPointer) {
        if (numbers[leftPointer] + numbers[rightPointer] === target) {
            return [leftPointer + 1, rightPointer + 1];
        }
        else if (numbers[leftPointer] + numbers[rightPointer] > target) {
            rightPointer--;
        }
        else {
            leftPointer++;
        }
    }
};