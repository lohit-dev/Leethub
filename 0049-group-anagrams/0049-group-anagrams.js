/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map();

    for (let i = 0; i < strs.length; i++) {
        let curr = strs[i];
        let sorted = curr.split("").sort().join("");

        if (!hash.has(sorted)) {
            hash.set(sorted, []);
        }

        hash.get(sorted).push(curr);
    }

    return [...hash.values()];
};