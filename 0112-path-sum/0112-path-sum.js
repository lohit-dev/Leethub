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
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//     if (root === null) return false
//     if (root.left === null && root.right === null && root.val === targetSum) return true;

//     return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
// };

var hasPathSum = function (root, targetSum) {
    if (root === null) return false
    const stack = [[root, targetSum]]

    while (stack.length > 0) {
        let [curr, target] = stack.pop()
        if (curr.left === null && curr.right === null && curr.val === target) return true
        const remaining = target - curr.val

        if (curr.left) stack.push([curr.left, remaining])
        if (curr.right) stack.push([curr.right, remaining])
    }

    return false
}