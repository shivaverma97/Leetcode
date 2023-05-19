// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3


/**
 * @param {number[]} nums
 * @return {number}
 */
 
 
 
 // initialized the dictionary, if the element key is not present in dict, then add key with value one, if the element is present then search and increase by one. return when condition is true
var majorityElement = function (nums) {
    let numsDict = {}

    for(let i=0; i<nums.length; i++){
        if(numsDict[nums[i]] === undefined){
            numsDict[nums[i]] = 1
        }
        else{
            numsDict[nums[i]] = numsDict[nums[i]] + 1
        }

        if(numsDict[nums[i]] > nums.length/2) return nums[i]
    }
};
