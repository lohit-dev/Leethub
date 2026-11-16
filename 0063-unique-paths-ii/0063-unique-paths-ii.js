/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid, row = 0, col = 0, memo = {}) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    const key = `${row}-${col}`

    if (key in memo) return memo[key]
    if (row === m || col === n || obstacleGrid[row][col] === 1) return 0
    if (row === m - 1 && col === n - 1) return 1

    const rightCount = uniquePathsWithObstacles(obstacleGrid, row + 1, col, memo)
    const downCount = uniquePathsWithObstacles(obstacleGrid, row, col + 1, memo)

    memo[key] = rightCount + downCount
    return memo[key]
};