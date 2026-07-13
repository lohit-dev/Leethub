/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let hashmap = {}
    let longest = 0

    for (let right = 0; right < s.length; right ++) {
        hashmap[s[right]] = (hashmap[s[right]] || 0) + 1

        while (hashmap[s[right]] > 1){
            // remove the left and decrement the left
            hashmap[s[left]]--
            left++
        }

        longest = Math.max(longest, right - left + 1)
    }

    return longest
};