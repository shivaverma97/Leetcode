// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
 
 // approach 1- find zero, remove it from that index, add zero at end
// var moveZeroes = function(nums) {
    // let i=0
    // let j = 0 

    // while(j<nums.length){
        // if(nums[i] === 0){
            // nums.splice(i,1)
            // nums.push(0)
            // j = j + 1
        // }
        // else{
            // i=i+1
            // j = j + 1
        // }
    // }
// };



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // approach 2- find non zero, move it to front, keep moving  non zero to end
var moveZeroes = function(nums) {
    let i=0
    let j = 0 

    while(i<nums.length){   
        if(nums[i] !== 0){
            nums[j] = nums[i]
            j= j+1
        }
        i = i + 1
    }

    while(j<nums.length){
        nums[j] = 0
        j = j + 1
    }
};