/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, i = 0, memo = {}) {
    if (i in memo) return memo[i];
    if (i >= nums.length - 1) return true;

    const maxStep = nums[i];
    for (let step = 1; step <= maxStep; step += 1) {
        if (canJump(nums, i + step, memo) === true) {
            memo[i] = true;
            return true;
        };
    }

    memo[i] = false;
    return false;
};