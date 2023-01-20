var lowestCommonAncestor = function(root, p, q) {
    
    let crnt = root;

    while (crnt) {
        if (p < crnt.val && q < crnt.val) crnt.left;
        else if (p > crnt.val && q > crnt.val) crnt.right;
        else return crnt;
    }
};