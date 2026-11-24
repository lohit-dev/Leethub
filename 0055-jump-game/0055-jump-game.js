/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, i = 0, memo = {}) {
    if (i >= nums.length - 1) return true
    if (i in memo) return memo[i]

    const step = nums[i]
    for (let j = 1; j <= step; j++) {
        if (canJump(nums, i + j, memo)) {
            memo[i] = true
            return true
        }
    }

    memo[i] = false
    return false
};