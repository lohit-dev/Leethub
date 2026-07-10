/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//    let curr1 = list1
//    let curr2 = list2
//    let head = new ListNode(-1);
//    let tail = head

//    while (curr1 !== null && curr2 !== null)  {
//     if (curr1.val < curr2.val) {
//         tail.next = curr1
//         curr1 = curr1.next
//     } else {
//         tail.next = curr2
//         curr2 = curr2.next
//     }
//     tail = tail.next
//    }

//     if (curr1 !== null) tail.next = curr1
//     if (curr2 !== null) tail.next = curr2

//    return head.next;
// };

var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}