/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let dummy = new ListNode(-1)
    let curr = dummy

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = 0

        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        sum += carry

        let remainder = sum % 10
        carry = Math.floor(sum / 10)

        dummy.next = new ListNode(remainder)
        dummy = dummy.next
    }

    return curr.next
};