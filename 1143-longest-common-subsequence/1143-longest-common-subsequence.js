/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2, i = 0, j = 0, memo = {}) {
    if (i === text1.length || j === text2.length) return 0

    const key = i + "," + j
    if (key in memo) return memo[key]

    if (text1[i] === text2[j]) {
        memo[key] = 1 + longestCommonSubsequence(text1, text2, i + 1, j + 1, memo)
    } else {
        const include = longestCommonSubsequence(text1, text2, i + 1, j, memo)
        const exclude = longestCommonSubsequence(text1, text2, i, j + 1, memo)

        memo[key] = Math.max(include, exclude)
    }

    return memo[key]
};