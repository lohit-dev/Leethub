/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = nums[i] * nums[i];
//     }
//     nums.sort((a, b) => a - b);
//     return nums;
// };

var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    let result = [];
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result.push(nums[left] * nums[left]);
            left++;
        } else {
            result.push(nums[right] * nums[right]);
            right--;
        }
    }
    // console.log(result);

    return result.reverse();
}