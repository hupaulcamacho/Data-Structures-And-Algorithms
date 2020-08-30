// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

const maxDepth = function(root) {
    let result = 0
    if (root === null) return result
    const search = function(node, depth) {
        if(node.left !== null) {
            search(node.left, depth + 1)
        } 
        if(node.right !== null) {
            search(node.right, depth + 1)
        } else {
            result = Math.max(result, depth)
        }
    }
    search(root, 1)
    return result
};
