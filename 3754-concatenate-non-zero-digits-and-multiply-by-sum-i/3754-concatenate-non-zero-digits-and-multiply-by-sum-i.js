/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let nums = n.toString()
    let result = ""
    let sum = 0

    for (let i = 0; i<nums.length; i++) {
        if (Number(nums[i]) !== 0) {
            sum += Number(nums[i])
            result += nums[i]
        }
    }

    return result*sum
};