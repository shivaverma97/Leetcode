//Merge Sort algo, first we divide to smallest unit and then sort

function mergeSort(array) {
    if (array.length <= 1) return array
    let mid = Math.floor(array.length / 2)
    let leftSubArray = array.slice(0, mid)
    let rightSubArray = array.slice(mid)

    let sortedLeftArray = mergeSort(leftSubArray)
    let sortedRightArray = mergeSort(rightSubArray)

    return merge(sortedLeftArray, sortedRightArray)
}

function merge(leftSubArray, rightSubArray) {
    let leftCount = 0
    let rightCount = 0
    let sortedArray = []


    while (leftCount < leftSubArray.length && rightCount < rightSubArray.length) {

        if (leftSubArray[leftCount] > rightSubArray[rightCount]) {
            sortedArray.push(rightSubArray[rightCount])
            rightCount = rightCount + 1
        }
        if (leftSubArray[leftCount] < rightSubArray[rightCount]) {
            sortedArray.push(leftSubArray[leftCount])
            leftCount = leftCount + 1
        }
        if (leftSubArray[leftCount] === rightSubArray[rightCount]) {
            sortedArray.push(leftSubArray[leftCount])
            sortedArray.push(rightSubArray[rightCount])
            leftCount = leftCount + 1
            rightCount = rightCount + 1
        }
    }

    while (leftCount < leftSubArray.length) {
        sortedArray.push(leftSubArray[leftCount])
        leftCount = leftCount + 1
    }

    while (rightCount < rightSubArray.length) {
        sortedArray.push(rightSubArray[rightCount])
        rightCount = rightCount + 1
    }
    return sortedArray
}