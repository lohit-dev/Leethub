/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1
    let maxWater = 0

    while (left < right){
        let width = right - left
        let minHeight = Math.min(height[left],height[right])

        let currentArea = width * minHeight
        maxWater = Math.max(maxWater, currentArea)

        if (height[left] < height[right]) {
            left++
        }else {
            right--
        }
    }
    
    return maxWater
};