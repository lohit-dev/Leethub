/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = {};

    for (const ch of magazine) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (const ch of ransomNote) {
        if (!count[ch]) return false;
        count[ch]--;
    }

    return true;
};