/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
   let left = Array(nums.length).fill(0)
   let right = Array(nums.length).fill(0)
   let result = Array(nums.length).fill(0)

   for (let i = 1; i < nums.length; i++){
    left[i] = left[i-1] + nums[i-1]
   }

   for(let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i+1] + nums[i+1]
   }

   for(let i = 0; i < nums.length; i++){
    result[i] = Math.abs(left[i] - right[i])
   }

   return result;
};