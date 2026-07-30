/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let sToT = {};
    let tToS = {};

    for (let i = 0; i < s.length; i++) {
        if (sToT[s[i]] !== undefined) {
            if (sToT[s[i]] !== t[i]) {
                return false;
            }
        }

        if (tToS[t[i]] !== undefined) {
            if (tToS[t[i]] !== s[i]) {
                return false;
            }
        }

        sToT[s[i]] = t[i];
        tToS[t[i]] = s[i];
    }

    return true;

};