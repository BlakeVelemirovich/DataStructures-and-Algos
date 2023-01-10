var mergeTwoLists = function(firstList, secondList) {
    
    let mergedList = new ListNode(0),
        crnt = mergedList;

    while (firstList && secondList) {
        if (firstList.val > secondList.val) {
            crnt.next = secondList;
            secondList = secondList.next;
        }
        else {
            crnt.next = firstList;
            firstList = firstList.next;
        }
    
        crnt = crnt.next;
    }

    crnt.next = firstList || secondList;

    return mergedList.next;
}

var mergeKLists = function(lists) {
    
    if (lists.length === 0 ) {
        return null;
    }

    while (lists.length > 1) {
        let firstList = lists.shift();
        let secondList = lists.shift();
        let mergedList = mergeTwoLists(firstList, secondList);
        lists.push(mergedList);
    }

    return lists[0];
};