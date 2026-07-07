/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};

    for (const str of strs) {
        const key = str.split("").sort().join("");

        if (!hash[key]) {
            hash[key] = [];
        }

        hash[key].push(str);
    }

    return Object.values(hash);
};