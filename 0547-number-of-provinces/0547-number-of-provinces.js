/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const adj = buildGraph(isConnected)

    const visited = new Set([])
    let count = 0

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            // dfs shit here
            function dfs(node) {
                visited.add(node)

                for (let neighbor of adj[node]) {
                    if (!visited.has(neighbor)) {
                        dfs(neighbor)
                    }
                }
            }
            count++
            dfs(i)
        }
    }

    return count
};

function buildGraph(graph) {
    const adj = {}

    for (let i = 0; i < graph.length; i++) {
        adj[i] = []

        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === 1 && i !== j) {
                adj[i].push(j)
            }
        }
    }

    return adj
}