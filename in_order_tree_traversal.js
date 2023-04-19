
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
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
var inorderTraversal = function(root) {
    let stack = []
    let final_arr = []

    while(root != null || stack.length > 0){
        while(root != null){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        final_arr.push(root.val)
        root = root.right
    }

    return final_arr
};