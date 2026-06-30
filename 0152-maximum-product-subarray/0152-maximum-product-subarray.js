/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0]
    let maxEndingHere = nums[0]
    let minEndingHere = nums[0]

    for (let i = 1; i < nums.length; i++){
        let current = nums[i]

        let tempMax = Math.max(current, Math.max(maxEndingHere * current, minEndingHere * current))
        let tempMin = Math.min(current, Math.min(maxEndingHere * current, minEndingHere * current))

        maxEndingHere = tempMax
        minEndingHere = tempMin

        maxSoFar = Math.max(maxSoFar, maxEndingHere)  
    }
    
    return maxSoFar
};