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
var isBalanced = function (root) {
    if (root === null) return true
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    )
};

function height(root) {
    if (root === null) return 0
    return 1 + Math.max(height(root.left), height(root.right))
}