// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 1){
        return new TreeNode(nums[0])
    }    
    if(nums.length === 0){
        return null
    }

    let center_index = Math.floor(nums.length/2)
    let root = new TreeNode(nums[center_index])

    let left_subtree = nums.slice(0, center_index)
    let right_subtree = nums.slice(center_index+1, nums.length)

    root.left = sortedArrayToBST(left_subtree)
    root.right = sortedArrayToBST(right_subtree)

    return root
};