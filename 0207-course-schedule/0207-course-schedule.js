/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites);
    const visited = new Set();
    const visiting = new Set();

    for (let key in graph) {
        if (!visited.has(key)) {

            function dfs(node) {
                visiting.add(node);

                for (let neighbor of graph[node]) {
                    neighbor = neighbor.toString();

                    if (visited.has(neighbor)) continue;
                    if (visiting.has(neighbor)) return false;

                    if (!dfs(neighbor)) return false;
                }

                visiting.delete(node);
                visited.add(node);

                return true;
            }

            if (!dfs(key)) return false;
        }
    }

    return true;
};

function buildGraph(numCourses, prerequisites) {
    const graph = {};

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    for (const prerequisite of prerequisites) {
        const [a, b] = prerequisite;

        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[b].push(a);
    }

    return graph;
}

