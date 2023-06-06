// find the second largest number form the given array num.
// input: [1,2,3,4,5]
// output: 4


function secondLargest(num){
    let largest = num[1]
    let secondLargest = 0 
    
    for(let i=0; i<num.length; i++){
        if(num[i] > largest){
            secondLargest = largest
            largest = num[i]
        }
        if(secondLargest < num[i] && num[i] < largest){
            secondLargest = num[i]
        }
    }
    
    return secondLargest
}