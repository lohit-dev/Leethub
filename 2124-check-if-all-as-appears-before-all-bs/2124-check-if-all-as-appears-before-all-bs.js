/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    const sorted = s.split("").sort().join("");
    if (sorted === s) return true
    return false
};