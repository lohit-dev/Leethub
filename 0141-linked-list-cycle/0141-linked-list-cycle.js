/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head, visited = new Set()) {
//    if (head === null) return false;
//    if (visited.has(head)) return true;
//    visited.add(head)
//    return hasCycle(head.next, visited)
// };

// var hasCycle = function (head) {
//     let curr = head
//     let visited = new Set()

//     while (curr !== null) {
//         if (visited.has(curr)){
//            return true 
//         }
//         visited.add(curr)
//         curr = curr.next
//     }

//     return false
// }

var hasCycle = function (head) {
    if(head === null || head.next === null) return false
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
}