/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s, i = 0, j = s.length - 1, memo = {}) {
    const key = `${i},${j}`
    if (s.length === 0) return 0
    if (key in memo) return memo[key]
    if (i > j) return 0
    if (i === j) return 1

    if (s[i] === s[j]) {
        memo[key] = 2 + longestPalindromeSubseq(s, i + 1, j - 1, memo)
    } else {
        const include = longestPalindromeSubseq(s, i + 1, j, memo)
        const exlcude = longestPalindromeSubseq(s, i, j - 1, memo)

        memo[key] = Math.max(include, exlcude)
    }

    return memo[key]

};