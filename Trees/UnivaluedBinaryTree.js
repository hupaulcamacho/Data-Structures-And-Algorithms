// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

const isUnivalTree = function(root) {
    const values = [];

    const search = function(node) {
        if (node) {
            values.push(node.val)
            search(node.left);
            search(node.right);
        }
    }

    const check = function(arr) {
        let target = arr[0]
        let result = arr.every(num => num === target)
        return result
    }
    search(root)
    return check(values)
};