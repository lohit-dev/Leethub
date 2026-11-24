/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let windowSum = 0
    let start = 0

    let map = new Map();
    let longest = 0

    for (let i = 0; i < s.length; i++) {
        windowSum += s[i]

        map.set(s[i], (map.get(s[i]) || 0) + 1)
        while (map.get(s[i]) > 1) {
            map.set(s[start], map.get(s[start]) - 1)
            start++
        }

        longest = Math.max(longest, i - start + 1)
    }

    return longest
};