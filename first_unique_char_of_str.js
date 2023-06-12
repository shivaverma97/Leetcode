// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    sLength = s.length
    if(sLength === 1) return 0
    let countDict = {}

    for (let i = 0; i <= sLength - 1; i++) {
        if (countDict[s[i]] === undefined) {
            countDict[s[i]] = 1
        }
        else {
            countDict[s[i]] = countDict[s[i]] + 1
        }
    }
    let res
    for (const [key, value] of Object.entries(countDict)) {
        if (value === 1) {
            res = key
            break
        }
    }
    if (res !== undefined) {
        for (let i = 0; i <= sLength - 1; i++) {
            if (s[i] === res) return i
        }
    }
    return -1
};