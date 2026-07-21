/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return isMirror(root.left, root.right)
};

function isMirror(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val != right.val) return false
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
}

// var isSymmetric = function (root) {
//     const stack = [[root.left, root.right]]

//     while (stack.length > 0) {
//         const [left, right] = stack.pop()

//         if (left === null && right === null) continue;
//         if (left === null || right === null) return false

//         if (left.val != right.val) return false

//         stack.push([left.left, right.right])
//         stack.push([left.right, right.left])
//     }

//     return true
// }