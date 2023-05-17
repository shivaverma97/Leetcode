// Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Input: root = [1,null,2,3]
// Output: [3,2,1]

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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let traversal_list = []

    if (root === null) return []
    return traverse(root, traversal_list)
};

function traverse(root, traversal_list) {
    if (root.left) {
        traverse(root.left, traversal_list)
    }
    if (root.right) {
        traverse(root.right, traversal_list)
    }
    traversal_list.push(root.val)

    return traversal_list
}