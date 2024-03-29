// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a,b) => a-b)
    prev = nums[0]
    
    if(prev === 1) return 0

    for(let i=1; i<=nums.length-1; i++){
        if(nums[i] !== (prev + 1)){
            return (nums[i] -1)
        }
        prev = nums[i]       
    }

    return (nums[nums.length-1] + 1)
};