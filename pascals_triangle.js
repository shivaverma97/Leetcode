// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) {
        return [[1]]
    }
    if (numRows === 2) {
        return [[1], [1, 1]]
    }

    arr = [[1], [1, 1]]

    if (numRows > 2) {
        for (let i = 1; i < numRows - 1; i++) {
            ref_arr = arr[i]
            sub_arr = []
            for (let j = 0; j < arr[i].length + 1; j++) {
                if (j === 0) {
                    sub_arr.push(1)
                }
                else if (j === arr[i].length) {
                    sub_arr.push(1)
                    arr.push(sub_arr)
                }
                else {
                    sub_arr.push(ref_arr[j-1] + ref_arr[j])
                }
            }
        }
    }

    return arr
};