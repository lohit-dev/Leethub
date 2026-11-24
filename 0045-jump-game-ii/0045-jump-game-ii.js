/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums, i = 0, memo = {}) {
    if (i >= nums.length - 1) return 0
    if (i in memo) return memo[i]

    let min = Infinity
    const step = nums[i]
    for (let j = 1; j <= step; j++) {
        const res = jump(nums, i + j, memo)
        min = Math.min(min, res + 1)
    }

    memo[i] = min
    return memo[i]
};