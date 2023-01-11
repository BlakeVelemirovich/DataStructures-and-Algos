var findMid = function(node) {

    let slow = node;
    let fast = node;

    while(fast !== null) {
        if (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        else {
            fast = null;
        }
    }

    const midPoint = slow.next;
    slow.next = null;
    return midPoint;
}

var reversedMid = function(node) {

    let [prev, crnt, nxt] = [null, node, null];

    while (crnt !== null) {
        
    }
    
    return prev;
}

var reorderList = function(head) {
    
    let midPoint = findMid(head);
    let reversedMid = reverseList(midPoint);
};