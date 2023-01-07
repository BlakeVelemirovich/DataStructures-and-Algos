var reverseList = function(head) {
    
    let [prev, crnt, nxt] = [null, head, null];

    while (crnt) {
        nxt = crnt.next;
        crnt.next = prev;
        prev = crnt;
        crnt = nxt;
    }
    return prev;
};