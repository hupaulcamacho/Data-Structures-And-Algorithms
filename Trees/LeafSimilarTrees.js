// Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

const leafSimilar = function(root1, root2) {
    let tips1 = [];
    let tips2 = [];

    const search = function(node, tips) {
        if (node !== null) {
            if(node.left === null  && node.right === null) {
                tips.push(node.val)
            }
            search(node.left, tips)
            search(node.right, tips)
        }
    }
    
    search(root1, tips1);
    search(root2, tips2);

    const checkTips = tips1.every((a, b) => a === tips2[b])
    const checkLength = tips1.length === tips2.length

    if (checkLength && checkTips) {
        return true
    } else {
        return false
    }
};