var isPalindrome = function(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && !(alphaNumChecker(s.charCodeAt(leftPointer)))) {
            leftPointer++;
        }
        while (rightPointer > leftPointer && !(alphaNumChecker(s.charCodeAt(rightPointer)))) {
            rightPointer--;
        }

        if (toLowerCase(s.charCodeAt(leftPointer)) !== toLowerCase(s.charCodeAt(rightPointer))) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    
    return true;
};

var alphaNumChecker = function(char) {
    if (!(char > 47 && char < 58) && // numeric (0-9)
        !(char > 64 && char < 91) && // upper alpha (A-Z)
        !(char > 96 && char < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}

var toLowerCase = function(char) {
    if (char >= 65 && char <= 90) {
        return char + 32    
    }
    else {
        return char
    }
}