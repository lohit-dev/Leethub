/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const seen = new Map();
    let runningSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        // whole subarray from index 0 up to i
        if (runningSum === k) count++;

        // subarrays that start after an earlier prefix
        const needed = runningSum - k;
        if (seen.has(needed)) count += seen.get(needed);

        seen.set(runningSum, (seen.get(runningSum) || 0) + 1);
    }

    return count;
};