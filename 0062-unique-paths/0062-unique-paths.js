/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, row = 0, col = 0, memo = {}) {
    // grid row length m grid col length n
    const key = `${row}-${col}`

    if (key in memo) return memo[key]
    if (row === m || col === n) return 0
    if (row === m - 1 && col === n - 1) return 1

    const rightCount = uniquePaths(m, n, row + 1, col, memo)
    const downCount = uniquePaths(m, n, row, col + 1, memo)

    memo[key] = rightCount + downCount
    return memo[key]
};