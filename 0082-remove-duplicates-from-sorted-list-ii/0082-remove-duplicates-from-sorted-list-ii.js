/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while (curr !== null) {
        // Found the start of a duplicate run
        if (curr.next !== null && curr.val === curr.next.val) {
            const duplicate = curr.val;
            // Skip every node with this duplicate value
            while (curr !== null && curr.val === duplicate) {
                curr = curr.next;
            }
            // Connect the last unique node to the next unique node
            prev.next = curr;
        } else {
            // Current node is unique
            prev = curr;
            curr = curr.next;
        }
    }

    return dummy.next;
};