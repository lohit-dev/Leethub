/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set([]);
    let count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // console.log(grid[i][j]);
            if (grid[i][j] === "1" && !visited.has([i, j].toString())) {
                count++;

                function dfs(row, col) {
                    if (row < 0 || row >= rows || col < 0 || col >= cols) {
                        return;
                    }

                    if (grid[row][col] === "0") return;
                    if (visited.has([row, col].toString())) return;

                    visited.add([row, col].toString());

                    dfs(row - 1, col);
                    dfs(row + 1, col);
                    dfs(row, col - 1);
                    dfs(row, col + 1);
                }

                dfs(i, j);
            }
        }
    }

    return count;
};