/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let longest = 0
    let hashmap = {}

    let left = 0
    for (let right = 0; right < s.length; right +=1) {
        hashmap[s[right]] = (hashmap[s[right]] || 0) + 1

        while ((right - left + 1) - Math.max(...Object.values(hashmap)) > k) {
            // remove the left most element 
            hashmap[s[left]]--
            if (hashmap[s[left]] === 0) {
                delete hashmap[s[left]]
            }
            left++
        }

        longest = Math.max(longest, right - left + 1)
    }

    return longest
};