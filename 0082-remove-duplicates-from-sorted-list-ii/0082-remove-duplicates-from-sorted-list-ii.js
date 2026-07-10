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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1)
    dummy.next = head
    
    let prev = dummy
    let curr = head

    while (curr !== null) {
        // Duplicate run starts
        if (curr.next !== null && curr.val === curr.next.val) {
            // Skip every node with this value
            while (curr.next !== null && curr.val === curr.next.val) {
                curr = curr.next;
            }

            // Remove the entire duplicate block
            prev.next = curr.next;

        } else {
            // Current node is unique
            prev = prev.next;
        }

        curr = curr.next;
    }

    return dummy.next
};