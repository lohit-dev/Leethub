/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low=0,mid = 0
    let high = nums.length - 1

    for(let i = 0;i<nums.length; i++){
        if (nums[mid] === 0) {
            [nums[mid], nums[low]]=   [nums[low], nums[mid]]
            low+=1
            mid+=1
        } else if (nums[mid] === 2) {
                        [nums[mid], nums[high]]=   [nums[high], nums[mid]]
                        high -=1 
        } else {
            mid+=1
        }
    }
};