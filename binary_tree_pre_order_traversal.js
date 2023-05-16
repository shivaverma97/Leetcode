// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Input: root = [1,null,2,3]
// Output: [1,2,3]

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
var preorderTraversal = function (root) {
    let traversal_list = []
    if (root === null) return []
    traversal_list.push(root.val)
    return traverse(root, traversal_list)
};

function traverse(root, traversal_list) {

    if (root.left) {
        traversal_list.push(root.left.val)
        traverse(root.left, traversal_list)
    }
    if (root.right) {
        traversal_list.push(root.right.val)
        traverse(root.right, traversal_list)
    }

    return traversal_list
}