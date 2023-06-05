// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
 // https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif for explanation
 
var reverseList = function(head) {
    let current = head
    let next = null
    let prev = null

    while(current){
        next = current.next
        current.next = prev 
        prev = current
        current = next
    }

    return prev
};