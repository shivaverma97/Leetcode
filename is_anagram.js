// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true


	/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	
	// EASY WAY TO SOLVE, JUST SORT AND COMPARE
	// s = s.split("").sort().join("")
    // t = t.split("").sort().join("")

    // if(s === t) return true 

    // return false
	
    let sCharDict = {}
    let tCharDict = {}

    if(s.length !== t.length) return false

    for(let i = 0; i<=s.length -1 ; i++){
        sCharDict[s[i]] = sCharDict[s[i]] === undefined ? 1 : sCharDict[s[i]] + 1
        tCharDict[t[i]] = tCharDict[t[i]] === undefined ? 1 : tCharDict[t[i]] + 1
    }

    if(Object.keys(sCharDict).length !== Object.keys(tCharDict).length) return false

    for(const[key, value] of Object.entries(sCharDict)){
        if(sCharDict[key] !== tCharDict[key]) return false
    }

    return true
};