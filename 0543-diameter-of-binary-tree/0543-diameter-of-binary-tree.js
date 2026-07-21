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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    function height(root) {
        if (root === null) return 0;

        const left = height(root.left);
        const right = height(root.right);

        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }

    height(root);

    return diameter;
}