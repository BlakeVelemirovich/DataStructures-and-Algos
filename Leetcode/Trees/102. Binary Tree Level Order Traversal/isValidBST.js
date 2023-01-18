var levelOrder = function(root) {
    
    let [que, ans] = [[root], []];

    while (que[0]) {
        let [qlen, row] = [que.length, []];

        for (i = 0; i < qlen; i++) {
            let crnt = que.shift();
            row.push(crnt.val);
            if (crnt.left) que.push(crnt.left);
            if (crnt.right) que.push(crnt.right);
        }
        ans.push(row);
    }
    return ans;
};
