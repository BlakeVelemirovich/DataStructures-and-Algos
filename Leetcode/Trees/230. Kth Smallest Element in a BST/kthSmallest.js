var kthSmallest = function(root, k) {

    let node = root;
    let stack = [];
    let cntr = 1;

    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        if (cntr === k) return node.val;
        else cntr++;
        node = node.right;
    }
}

/* var dfs = function(root, set) {

    if (root === null) return true;

    set.push(root.val);
    dfs(root.left, set);
    dfs(root.right, set);

    return set;
}

var kthSmallest = function(root, k) {
    
    let set = [];

    dfs(root, set);
    set.sort();
    return (set[k]);
};