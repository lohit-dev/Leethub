/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
let result = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // If num is negative, high and low swap roles
        if (num < 0) {
            [currentMax, currentMin] = [currentMin, currentMax];
        }

        // Extend the subarray, or start fresh at this index
        currentMax = Math.max(num, currentMax * num);
        currentMin = Math.min(num, currentMin * num);

        // Track the best product seen so far
        result = Math.max(result, currentMax);
    }

    return result;
};