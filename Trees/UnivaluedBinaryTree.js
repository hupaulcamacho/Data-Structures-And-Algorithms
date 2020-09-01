// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

const isUnivalTree = function(root) {
    const search = function(node, value) {
        if (node) {
            let univalueLeft = search(node.left, node.value);
            let univalueRight = search(node.right, node.value);
            
            if (node.val !== value) {
                return false
            } else {
                return univalueLeft && univalueRight
            }
        } else {
            return true
    }
    return search(root, root.val)
};

