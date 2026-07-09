/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxValidPairSum = function(nums, k) {
    let maxSum = 0;
    let maxi = nums[0];
    
    for (let i = k; i < nums.length; i++) {
        maxi = Math.max(maxi, nums[i-k])
        maxSum = Math.max(maxSum, maxi + nums[i])
    }
    
    return maxSum;
};