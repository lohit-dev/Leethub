/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null
    let merged = lists[0]
    for (let i = 1; i < lists.length; i++) {
        merged = mergeTwoLinkedLists(merged,lists[i])
    }

    return merged
};

function mergeTwoLinkedLists(list1, list2) {
    let dummy = new ListNode(-1)
    let tail = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val)  {
            tail.next = list2
            list2 = list2.next
        } else {
            tail.next = list1
            list1 = list1.next
        }

        tail = tail.next
    }

    if (list1 !==null) tail.next = list1
    if (list2 !==null) tail.next = list2

    return dummy.next
}