// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    nums1 = nums1.sort(function (a, b) {
        return a - b
    });
    nums2 = nums2.sort(function (c, d){
        return c - d
    })

    let i = 0
    let j = 0
    let intersection = ['null']

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (intersection[intersection.length - 1] !== nums1[i]) {
                intersection.push(nums1[i])
            }
            i = i + 1
            j = j + 1
        }
        if (nums1[i] > nums2[j]) {
            j = j + 1
        }
        if (nums1[i] < nums2[j]) {
            i = i + 1
        }
    }
    intersection.shift()
    return intersection
};