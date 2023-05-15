// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Input: rowIndex = 3
// Output: [1,3,3,1]


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = []
    rowIndex = rowIndex + 1
    if (rowIndex === 1) {
        arr = [[1]]
    }
    if (rowIndex === 2) {
        arr = [[1], [1, 1]]
    }

    if (rowIndex > 2) {
        arr = [[1], [1, 1]]
        for (let i = 1; i < rowIndex - 1; i++) {
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
                    sub_arr.push(ref_arr[j - 1] + ref_arr[j])
                }
            }
        }
    }

    return arr[rowIndex - 1]
};