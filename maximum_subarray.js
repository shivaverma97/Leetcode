// Given an integer array nums, find the 
// subarray
 // with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
 
 
 // we have used kadane's algo, idea is we are asining the finalSum with maximum possible integer in case of all negatives and in case of positives we know that if total sum till that point 
 // gets below zero it will make whole term as less. In between we are checking the finalSum value with sum till then. 
var maxSubArray = function (nums) {
    let finalSum = -Infinity
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]

        if (sum > finalSum) {
            finalSum = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    
    return finalSum
};