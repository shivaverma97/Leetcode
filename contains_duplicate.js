// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()

    for (let i=0; i<nums.length; i++){
        let numCount = map.get(nums[i])
        if(numCount === undefined){
            numCount = 1
        }
        if(numCount >1) return true
        map.set(nums[i], numCount + 1) 
    }

    return false
};