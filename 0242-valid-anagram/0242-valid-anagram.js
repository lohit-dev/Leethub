/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length){
        return false
    }

    const hashmap = new Map();

    for (let i = 0;i < s.length; i++){
        if (hashmap.has(s[i])) {
            hashmap.set(s[i], hashmap.get(s[i]) + 1);
        } else {
            hashmap.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++){
        if (!hashmap.has(t[i])) {
            return false;
        }

        hashmap.set(t[i], hashmap.get(t[i]) - 1)

        if (hashmap.get(t[i]) === 0) {
            hashmap.delete(t[i]);
        }
    }

    return hashmap.size == 0
};