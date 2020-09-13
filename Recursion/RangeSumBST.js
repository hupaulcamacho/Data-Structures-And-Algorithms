// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

const rangeSumBST = function(root, L, R) {
    let result = 0
    if (root === null) { return result }

    const search = function(node) {
        if(node) {
            if(node.val >= L  && node.val <= R) {
                result += node.val
            }
            if(node.val > L) {
                search(node.left)
            }
            if(node.val < R) {
                search(node.right)
            }
        }
    }

    return result
};