// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let a = 1
    while(true){
        if(a === n){
            return true
        }
        else if(a > n){
            return false
        }
        else{
            a = a*3
        }
    }
};