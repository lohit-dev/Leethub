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
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;

    let dummy = new ListNode(-1);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while (curr !== null && curr.next !== null) {

        let next = curr.next;
        let after = next.next;

        // Swap
        prev.next = next;
        next.next = curr;
        curr.next = after;

        // Move to the next pair
        prev = curr;
        curr = after;
    }

    return dummy.next;
};