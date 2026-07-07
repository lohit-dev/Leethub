/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    left = 1

    for(let i = 0; i < nums.length; i++){
        if (nums[i] !== nums[left - 1]) {
            nums[left] = nums[i]
            left++
        }
    }

    return left
};