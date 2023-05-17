// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	
	// approach 1--> add elements of list 1 and compare it with the list
	// let set = new Set();
    // while(headA) {
        // set.add(headA);
        // headA = headA.next;
    // }
    // while(headB) {
        // if(set.has(headB)) return headB;
        // headB = headB.next;
    // }
    // return null;	
	
	
	
	// find length of both lists, make pointers at same point, run and compare if at same point.
    let length_a = 1
    let length_b = 1
    let pointer_a = headA
    let pointer_b = headB

    if (headA === headB && headA.val === 1) return headA

    while ((pointer_a && pointer_a.next) || (pointer_b && pointer_b.next)) {
        if (pointer_a && pointer_a.next) {
            pointer_a = pointer_a.next
            length_a = length_a + 1
        }
        if (pointer_b && pointer_b.next) {
            pointer_b = pointer_b.next
            length_b = length_b + 1
        }
    }

    if (pointer_a === pointer_b) {
        let diff = Math.abs(length_a - length_b)

        if (length_a > length_b) {
            for (let i = 0; i < diff; i++) {
                headA = headA.next
            }
        }
        else {
            for (let i = 0; i < diff; i++) {
                headB = headB.next
            }
        }

        
        while (headA) {
            if (headA === headB) {
                return headA
            }

            if (headA.next) {
                headA = headA.next
                headB = headB.next
            }
        }
    }

    return null
};