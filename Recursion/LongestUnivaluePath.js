// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

const longestUnivaluePath = function(root) {
    let result = 0
    const search = function(node) {
        if (!node) { return 0 }
        let left = search(node.left);
        let right = search(node.right)

        let maxLeft = 0;
        let maxRight = 0;

        if (node.left !== null && node.left.value === node.val) {
            maxLeft = 1 + left
        }

        if (node.right !== null && node.right.value === node.val) {
            maxRight = 1 + right
        }
        
        result = Math.max(result, maxLeft + maxRight)
        return result
    }

    search(root)
    return result
};