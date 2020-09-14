// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

const longestUnivaluePath = function(root) {
    let result = 0
    const search = function(node) {
        if (!node) { return 0 }
        let left = search(node.left);
        let right = search(node.right)

        let maxLeft = 0;
        let maxRight = 0;

        if (node.left && node.left.val === node.val) {
            maxLeft = left + 1
        }

        if (node.right && node.right.val === node.val) {
            maxRight = right + 1
        }
        
        result = Math.max(result, maxLeft + maxRight)
        return Math.max(maxLeft, maxRight)
    }

    search(root)
    return result
};