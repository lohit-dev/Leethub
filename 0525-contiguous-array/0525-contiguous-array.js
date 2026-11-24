/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    const firstIndex = new Map()
    let runningSum = 0
    let longest = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) runningSum -= 1
        if (nums[i] === 1) runningSum += 1

        // whole prefix from index 0 up to i
        if (runningSum === 0) longest = i + 1

        if (firstIndex.has(runningSum)) {
            longest = Math.max(longest, i - firstIndex.get(runningSum))
        }

        if (!firstIndex.has(runningSum)) {
            firstIndex.set(runningSum, i)
        }
    }

    return longest
};
