/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function(nums, k) {
//     let n = nums.length
//     let maxAverage = -Infinity, curr_sum = 0
//     for (let i = 0; i <= n - k ; i++){
//         curr_sum = 0
//         for (let j = i; j < i + k; j++) {
//             curr_sum += nums[j]
//         }

//         maxAverage = Math.max(maxAverage, curr_sum)
//     }


//     return maxAverage / k
// };

var findMaxAverage = function (nums, k) {
  let curr = 0
  for (let i = 0; i < k; i++) {
    curr += nums[i]
  }

  let maxSum = curr
  for (let i = 0;i < nums.length - k; i++) {
    curr = curr - nums[i]
    curr = curr + nums[i + k]

    maxSum = Math.max(maxSum,curr)
  }

  return maxSum / k
}