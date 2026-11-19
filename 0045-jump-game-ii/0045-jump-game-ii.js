/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums, i = 0, memo = {}) {
    if (i >= nums.length - 1) return 0;
    if (i in memo) return memo[i]

    let minJumps = Infinity

    for (let j = 1; j <= nums[i]; j++) {
        const res = jump(nums, i + j, memo)
        minJumps = Math.min(minJumps, res + 1)
        memo[i] = minJumps
    }

    return minJumps;
};