/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set([]);
    let count = 0;

    const directions = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0],
    ];

    const queue = populateQueue(grid, visited, directions);

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();

            for (let direction of directions) {
                const [dr, dc] = direction;
                const [newRow, newCol] = [row + dr, col + dc];

                const rowInBound = newRow >= 0 && newRow < rows;
                const colInBound = newCol >= 0 && newCol < cols;

                if (rowInBound && colInBound) {
                    if (!visited.has([newRow, newCol].toString())) {
                        if (grid[newRow][newCol] === 1) return count;

                        visited.add([newRow, newCol].toString());
                        queue.push([newRow, newCol]);
                    }
                }
            }
        }

        count++;
    }

    return -1;
};

function populateQueue(grid, visited, directions) {
    const queue = [];
    let isFirst = false;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && !visited.has([i, j].toString())) {
                // Actual dfs here
                function dfs(row, col) {
                    if (
                        row < 0 ||
                        row >= grid.length ||
                        col < 0 ||
                        col >= grid[0].length
                    ) {
                        return;
                    }

                    if (grid[row][col] === 0) return;
                    if (visited.has([row, col].toString())) return;

                    visited.add([row, col].toString());
                    queue.push([row, col]);

                    for (let direction of directions) {
                        const [dr, dc] = direction;
                        const [newRow, newCol] = [row + dr, col + dc];

                        dfs(newRow, newCol);
                    }
                }

                if (isFirst) {
                    return queue;
                }

                dfs(i, j);
                isFirst = true;
            }
        }
    }

    return queue;
}

