/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head == null || head.next === null) return null
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null)  {
        slow = slow.next
        fast = fast.next.next

        if (fast === slow) {
            let ptr = head

            while(ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }

            return ptr // can return slow as well it doesn't matter because both are same thing 
        }
    }

    return null
};