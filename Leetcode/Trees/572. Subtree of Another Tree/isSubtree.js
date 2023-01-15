var compareTrees = function(root, subRoot) {

    if (root.val === subRoot.val) {

        let leftNode = compareTrees(root.left, subRoot.left);
        let rightNode = compareTrees(root.right, subRoot.right);

        if (leftNode && rightNode) return true;
    }
}

var isSubtree = function(root, subRoot) {
    
    if (!root || !subRoot) return false;

    if (root.val === subRoot.val) {
        let isEqual = compareTrees(root, subRoot);
    }

    isSubtree(root.left, subRoot);
    isSubtree(root.right, subRoot);

    if (isEqual) return true;
    else return false;

};