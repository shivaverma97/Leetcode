// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let unique_num = 0

	// we are using xor here, the numbers keeps on adding in unique number and whenever same number adds to unqiue num, xor will cancel out both for unique as two same are zero in xor
    for (let i = 0; i < nums.length; i++){
        unique_num = unique_num ^ nums[i]
    }
    return unique_num 
};