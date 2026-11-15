/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums, i = 0, memo = {}) {
    // function (nums, i = 0, sum = 0, maxSum = 0, memo = {})
    // if (i >= nums.length) return maxSum;

    // const key = `${i}-${sum}`;

    // if (key in memo) return memo[key];

    // sum += nums[i];
    // maxSum = Math.max(maxSum, sum);

    // const pick = rob(nums, i + 2, sum, maxSum, memo);
    // const skip = rob(nums, i + 1, sum - nums[i], maxSum, memo);

    // memo[key] = Math.max(pick, skip);

    // return memo[key];

    if (i in memo) return memo[i];
    if (i >= nums.length) return 0;

    const take = nums[i] + rob(nums, i + 2, memo);
    const skip = rob(nums, i + 1, memo);

    memo[i] = Math.max(take, skip);
    return memo[i];

};