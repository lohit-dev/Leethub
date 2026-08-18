/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    let left = 0;
    let count = new Map();

    for (let right = 0; right < nums.length; right++) {
        if (right - left + 1 === k) {
            let seen = new Set();

            for (let i = left; i <= right; i++) {
                seen.add(nums[i]);
            }

            for (let num of seen) {
                count.set(num, (count.get(num) || 0) + 1);
            }

            left++;
        }
    }

    let answer = -1;

    for (let [num, frequency] of count) {
        if (frequency === 1) {
            answer = Math.max(answer, num);
        }
    }

    return answer;
};