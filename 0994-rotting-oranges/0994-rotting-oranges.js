/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set([])
    const queue = []
    let count = 0 // minutes that we are going to keep track of

    // scan the entire array and add stuff to queue to initial process
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2 && !visited.has([i, j].toString())) {
                visited.add([i, j].toString())
                queue.push([i, j])
            }
        }
    }

    // here i would do the actual bfs stuff
    while (queue.length > 0) {
        const size = queue.length

        // check for four direction
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ]

        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()

            for (const direction of directions) {
                const [dr, dc] = direction
                const [newRow, newCol] = [row + dr, col + dc]

                const rowInBounds = newRow >= 0 && newRow < rows
                const colInBounds = newCol >= 0 && newCol < cols

                if (rowInBounds && colInBounds) {
                    if (grid[newRow][newCol] == 1 && !visited.has([newRow, newCol].toString())) {
                        visited.add([newRow, newCol].toString())
                        grid[newRow][newCol] = 2
                        queue.push([newRow, newCol])
                    }
                }
            }
        }

        if (queue.length > 0) {

            count++
        }
    }

    // Check for remaining fresh oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return count
}
