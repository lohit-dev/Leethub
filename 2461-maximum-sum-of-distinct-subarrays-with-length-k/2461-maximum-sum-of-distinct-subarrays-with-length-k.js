/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let curr = 0
    let map = {}
    let duplicates = 0

    for (let i = 0; i < k; i++) {
        curr += nums[i]
        map[nums[i]] = (map[nums[i]] || 0) + 1

        if (map[nums[i]] === 2) {
            duplicates++
        }
    }

    let maxSum = duplicates === 0 ? curr : 0

    for (let i = 0; i < nums.length - k; i++) {
        curr -= nums[i]

        if (map[nums[i]] === 2) {
            duplicates--
        }

        map[nums[i]]--
        if (map[nums[i]] === 0) {
            delete map[nums[i]]
        }

        curr += nums[i + k]
        map[nums[i + k]] = (map[nums[i + k]] || 0) + 1

        if (map[nums[i + k]] === 2) {
            duplicates++
        }

        if (duplicates === 0) {
            maxSum = Math.max(curr, maxSum)
        }
    }

    return maxSum
};