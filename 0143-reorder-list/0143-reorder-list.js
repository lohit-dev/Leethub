/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
   let slow = head
   let fast = head

   while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
   }

   let second = slow.next
   slow.next = null
   let prev = null

   while (second !== null) {
    let next = second.next
    second.next = prev
    prev = second
    second = next
   }

//    console.log(head)
//    console.log(prev)

// cheated here although i know the concept of zipper list
   while(prev !== null) {
    let firstNext = head.next
    let secondNext = prev.next

    head.next = prev
    prev.next = firstNext

    head = firstNext
    prev = secondNext
   }


return head;
};