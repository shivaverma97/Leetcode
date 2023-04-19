// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
var maxDepth = function(root) {
    let depth = 0
    let stack = []
    if(root === null ){
        return 0
    }
    stack.push(root)

    while(stack.length > 0){
        let size = stack.length

        for(let i=0; i< size; i++){
            let temp = stack.shift()
            if(temp.left != null){
                stack.push(temp.left)
            }
            if(temp.right != null){
                stack.push(temp.right)
            }
        }
        depth = depth + 1
    }

    return depth
};