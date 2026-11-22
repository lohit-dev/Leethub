/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict, i = 0, memo = {}) {
    if (i === s.length) return true
    if (i in memo) return memo[i]

    for (let word of wordDict) {
        if (s.startsWith(word, i)) {
            if (wordBreak(s, wordDict, i + word.length, memo)) {
                memo[i] = true
                return true
            }
        }
    }

    memo[i] = false
    return false
};