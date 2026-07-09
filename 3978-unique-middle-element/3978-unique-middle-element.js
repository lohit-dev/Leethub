/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    let map = {} 
    let middle = Math.floor(nums.length / 2)  
    
    for (let i = 0; i < nums.length; i++){
        map[nums[i]] = (map[nums[i]] ?? 0) + 1;
    }
    
    return map[nums[middle]] === 1
};