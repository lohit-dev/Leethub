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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let counter = 0
    let result = 0
    function inOrder(root) {
        if (root === null) return null

        inOrder(root.left)
        counter++;
        if (counter === k) {
            result = root.val;
        }
        inOrder(root.right)
    }

    inOrder(root)

    return result
};