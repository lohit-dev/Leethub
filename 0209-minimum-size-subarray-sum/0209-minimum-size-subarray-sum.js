/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let windowSize = 0;
    let start = 0;

    let minLen = Infinity;

    for (let i = 0; i < nums.length; i++) {
        windowSize += nums[i];

        while (windowSize >= target) {
            minLen = Math.min(minLen, i - start + 1);

            windowSize -= nums[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};