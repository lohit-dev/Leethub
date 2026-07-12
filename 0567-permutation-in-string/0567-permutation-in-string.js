/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let k = s1.length
    if (k > s2.length) return false

    let hashmap = {}
    let targetMap = {}

    for (let i = 0; i < k; i+=1){
        hashmap[s2[i]] = (hashmap[s2[i]] || 0) + 1
        targetMap[s1[i]] = (targetMap[s1[i]] || 0) + 1
    }

    for (let i = 0; i <= s2.length - k; i++) {
        if (isEqual(hashmap, targetMap)) {
            return true
        }

        // remove the left element 
        hashmap[s2[i]]--
        if (hashmap[s2[i]] === 0) {
            delete hashmap[s2[i]]
        }

        // add the right element
        hashmap[s2[i+k]] = (hashmap[s2[i+k]] || 0) + 1
    }
    
    return false
};

function isEqual(one, two) {
    if (Object.keys(one).length !== Object.keys(two).length) {
        return false;
    }

    for (let key in one) {
        if (one[key] !== two[key]) return false
    }

    return true
}