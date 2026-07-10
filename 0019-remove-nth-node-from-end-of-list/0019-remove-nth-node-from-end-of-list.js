/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let curr = head;

    while (curr !== null) {
        length++;
        curr = curr.next;
    }
    let index = length - n
    let count = 0

    if (index === 0) return head.next

    curr = head 
    while (curr !== null) {
        count+=1
        if(count === index) {
            curr.next = curr.next.next
            break;
        }
        curr = curr.next
    }
    return head
};