/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    // atmost = less than or equal to
    let windowSum = 0
    let start = 0
    let zeroCount = 0

    let longestOne = 0

    for (let i = 0; i < nums.length; i++) {
        windowSum += nums[i]

        if (nums[i] === 0) zeroCount++

        while (zeroCount > k) {
            windowSum -= nums[start]
            if (nums[start] === 0) zeroCount--
            start++
        }

        longestOne = Math.max(longestOne, i - start + 1)
    }

    return longestOne;
}