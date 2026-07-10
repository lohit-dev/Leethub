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
// var removeNthFromEnd = function(head, n) {
//     let length = 0;
//     let curr = head;

//     while (curr !== null) {
//         length++;
//         curr = curr.next;
//     }
//     let index = length - n
//     let count = 0

//     if (index === 0) return head.next

//     curr = head 
//     while (curr !== null) {
//         count+=1
//         if(count === index) {
//             curr.next = curr.next.next
//             break;
//         }
//         curr = curr.next
//     }
//     return head
// };

var removeNthFromEnd = function(head, n){
    if(head === null || head.next === null) return null

    let dummy = new ListNode(-1)
    dummy.next = head
    let slow = dummy
    let fast = dummy

    for (let i = 0; i < n + 1; i++) {
        fast = fast.next
    }

    while(fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next;

   return dummy.next
}