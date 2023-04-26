// Given a binary tree, determine if it is 
// height-balanced
// .

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
var isBalanced = function(root) {
    let left_subtree_node
    let left_subtree_depth = 0
    let right_subtree_node
    let right_subtree_depth = 0

    if(root === null){
        return true
    }

    if(root.left !== null){
        left_subtree_node = root.left
        left_subtree_depth = depthOfTree(left_subtree_node)
    }

    if (root.right !== null){
        right_subtree_node = root.right
        right_subtree_depth = depthOfTree(right_subtree_node)
    }

    if(left_subtree_depth - right_subtree_depth > 1){
        return false
    }

    return true
};

function depthOfTree(node){
    let depth = 0
    stack = []
    stack.push(node)

    while(stack.length > 0){
        let size = stack.length

        for(let i = 0; i<size; i++){
            let temp = stack.shift()
            if(temp.left !== null){
                stack.push(temp.left)
            }
            if(temp.right != null){
                stack.push(temp.right)
            }
        }

        depth = depth + 1
    }

    return depth
}