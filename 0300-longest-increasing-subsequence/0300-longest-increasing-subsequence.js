/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // var lengthOfLIS = function (nums, i = 0, prev = -1, memo = []) {
    // if (i === nums.length) return 0
    // if (!memo[i]) memo[i] = [];
    // if (memo[i][prev + 1] !== undefined) return memo[i][prev + 1]

    // let include = 0
    // const exclude = lengthOfLIS(nums, i + 1, prev, memo)
    // if (prev === -1 || nums[prev] < nums[i]) {
    //     include = 1 + lengthOfLIS(nums, i + 1, i, memo)
    // }

    // memo[i][prev + 1] = Math.max(include, exclude)
    // return memo[i][prev + 1]

    let longest = []

    for (let num of nums) {
        let left = 0
        let right = longest.length

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (longest[mid] >= num) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        longest[left] = num
    }

    return longest.length
};