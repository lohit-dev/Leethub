/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    const hashset = new Set(nums);
    let result = []
    let smallest = nums[0]
    let largest = nums[0]

    for (const num of nums) {
        smallest = Math.min(smallest, num)
        largest = Math.max(largest, num)
    }

    for (let i = smallest; i <= largest; i++) {
        if (!hashset.has(i)) {
            result.push(i)
        }
    }

    return result
};