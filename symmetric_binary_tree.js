// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    stack = []

    if(root == null){
        return true
    }

    stack.push(root.left)
    stack.push(root.right)

    while(stack.length > 0){

        const node1 = stack.pop()
        const node2 = stack.pop()

        if(node1 === null & node2 === null){
            continue
        }

        if(node1 === null || node2 === null){
            return false
        }

        if(node1.val !== node2.val){
            return false
        }

        stack.push(node1.left)
        stack.push(node2.right)
        stack.push(node1.right)
        stack.push(node2.left)
    }

    return true
};