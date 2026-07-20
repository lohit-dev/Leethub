/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//     if (p === null && q === null) return true

//     if (p === null || q === null) {
//         return false;
//     }

//     if (p.val !== q.val) return false;
//     return isSameTree(p.left, q.left)
// };

var isSameTree = function (p, q) {
    const stack = [[p, q]];

    while (stack.length > 0) {
        const [a, b] = stack.pop();

        if (a === null && b ===null) continue;
        if (a === null || b === null) return false;
        if (a.val !== b.val) return false;

        stack.push([a.left, b.left]);
        stack.push([a.right, b.right]);
    }

    return true;
};