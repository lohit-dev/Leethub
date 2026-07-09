/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    let count = 0
    let middle = nums[Math.floor(nums.length / 2)]  
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === middle) count++
    }
    
    return count === 1
};