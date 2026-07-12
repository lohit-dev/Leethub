/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let k = p.length;
    if (k > s.length) return [];

    let word = "";
    let hashmap = {};
    let targetMap = {};

    for (let i = 0; i < k; i++) {
        word += s[i];
        hashmap[s[i]] = (hashmap[s[i]] || 0) + 1;
        targetMap[p[i]] = (targetMap[p[i]] || 0) + 1;
    }

    let result = [];

    for (let i = 0; i <= s.length - k; i++) {

        if (isEqual(hashmap, targetMap)) {
            result.push(i);
        }

        if (i + k >= s.length) break;

        // remove left character
        hashmap[s[i]]--;
        if (hashmap[s[i]] === 0) {
            delete hashmap[s[i]];
        }

        // add right character
        hashmap[s[i + k]] = (hashmap[s[i + k]] || 0) + 1;

        // optional, keeps your original style
        word = word.slice(1);
        word += s[i + k];
    }

    return result;
};

function isEqual(map, anotherMap) {
    for (let key in anotherMap) {
        if (map[key] !== anotherMap[key]) return false;
    }

    // Make sure map doesn't have extra characters
    for (let key in map) {
        if (map[key] !== anotherMap[key]) return false;
    }

    return true;
}