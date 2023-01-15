var compareTrees = function(root, subRoot) {

    let left = compareTrees(root.left, subRoot.left);
    let right = compareTrees (root.right, subRoot.right)
}

var isSubtree = function(root, subRoot) {
    
    if (!root) return false;

    if (root.val === subRoot.val) {
        let isSame = compareTrees(root, subRoot);
    }

    isSubtree(root.left);
    isSubtree(root.right);
}