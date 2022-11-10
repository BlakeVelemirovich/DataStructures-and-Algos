var reverseString = function(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    let temp;
    
    while (leftPointer < rightPointer) {
        temp = s[leftPointer];
        s[leftPointer++] = s[rightPointer];
        s[rightPointer--] = temp;
    }
};