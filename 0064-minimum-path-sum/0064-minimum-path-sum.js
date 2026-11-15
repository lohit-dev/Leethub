/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid, row = 0, col = 0, memo = {}) {
    const key = `${row}-${col}`;

    if (key in memo) return memo[key];
    if (row === grid.length || col === grid[0].length) return Infinity;
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return grid[row][col];
    }

    const downCount = minPathSum(grid, row + 1, col, memo);
    const rightCount = minPathSum(grid, row, col + 1, memo);

    memo[key] = grid[row][col] + Math.min(downCount, rightCount);
    return memo[key];
};