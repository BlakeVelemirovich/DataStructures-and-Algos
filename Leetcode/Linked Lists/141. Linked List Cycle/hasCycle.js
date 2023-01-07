var hasCycle = function(head) {
    
    let [slow, fast] = [head, head];

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) return true;
    }
    
    return false;
}