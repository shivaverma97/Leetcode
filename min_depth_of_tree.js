// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    let depth = 0
    let stack = []
    if (root === null) {
        return 0
    }
    stack.push(root)

    while (stack.length > 0) {
        let size = stack.length

        for (let i = 0; i < size; i++) {
            let temp = stack.shift()
            if (temp.left != null) {
                stack.push(temp.left)
            }
            if (temp.right != null) {
                stack.push(temp.right)
            }
            if(temp.left == null && temp.right == null){
                return depth + 1
            }
        }
        depth = depth + 1
    }

    return depth
};