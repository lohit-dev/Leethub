/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0, maxSum = -Infinity

    for (let i = 0; i < nums.length; i++){
        currentSum += nums[i]
        if (maxSum < currentSum) maxSum = currentSum

        if (currentSum < 0){
            currentSum = 0
        }
    }

    return maxSum
};