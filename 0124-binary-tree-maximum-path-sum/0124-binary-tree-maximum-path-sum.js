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
var maxPathSum = function (root) {
    let result = Number.NEGATIVE_INFINITY

    function postOrderDFS(root) {
        if (root === null) return null

        let left = Math.max(0, postOrderDFS(root.left));
        let right = Math.max(0, postOrderDFS(root.right));

        result = Math.max(result, root.val + left + right)

        return Math.max(0, root.val + Math.max(left, right));

    }

    postOrderDFS(root)
    return result
}
