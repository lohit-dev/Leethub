/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null
    let visited = new Set()

    while (headA !== null) {
        visited.add(headA)
        headA = headA.next 
    }

    while (headB !== null) {
        if(visited.has(headB)) return headB
        headB = headB.next
    }

    return null
};

//     var pA = headA;
//     var pB = headB;

//     // Each pointer traverses both lists, meeting at intersection or null
//     while (pA !== pB) {
//         pA = (pA !== null) ? pA.next : headB;
//         pB = (pB !== null) ? pB.next : headA;
//     }

//     return pA;