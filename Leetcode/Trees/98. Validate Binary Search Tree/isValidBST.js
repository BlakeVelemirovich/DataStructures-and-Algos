var dfs = function(root, min, max) {

    if (root.val === null) return true;
    if (root.val >= max) return false;
    if (root.val <= min) return false;

    return isValidBST(root, min, max);
}

var isValidBST = function(root, min = -Infinity, max = infinity) {
    
    return (dfs(root.left, min, root.val) && dfs(root.right, root.val, max));
};