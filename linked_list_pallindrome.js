// Given the head of a singly linked list, return true if it is a 
// palindrome
 // or false otherwise.
 
 // Input: head = [1,2,2,1]
// Output: true

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let numString = ''
    let revString = ''

    while(head){
        numString = numString + (head.val).toString()
        head = head.next
    }

   for(let i= numString.length-1; i > -1; i--){
       revString = revString + numString[i]
   }
   
   return numString === revString
};