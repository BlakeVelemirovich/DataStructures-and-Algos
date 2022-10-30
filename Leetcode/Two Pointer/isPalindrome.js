var isPalindrome = function(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && !(alphaNumChecker(s[leftPointer]))) {
            leftPointer++;
        }
        while (rightPointer > leftPointer && !(alphaNumChecker(s[rightPointer]))) {
            rightPointer--;
        }

        if (toLowerCase(s[leftPointer]) != toLowerCase(s[rightPointer])) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    
    return true;
}

var alphaNumChecker = function(char) {
    if (!(char > 47 && char < 58) && 
        !(char > 64 && char < 91) && 
        !(char > 96 && char < 123)) { 
      return false;
    }
    return true;
}

var toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}

console.log("race a car");