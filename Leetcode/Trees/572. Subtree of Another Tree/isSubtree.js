var compareTrees = function(root, subRoot) {

    if (!root && !subRoot) return true;
    else if (root && subRoot && root.val === subRoot.val) {
        return (compareTrees(root.left, subRoot.left) && compareTrees(root.right, subRoot.right));
    }
    else return false;

}

var isSubtree = function(root, subRoot) {
    
    if (!root) return false;
    if (!subRoot) return true;

    if (compareTrees(root, subRoot)) return true;
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
}