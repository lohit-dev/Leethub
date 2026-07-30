/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let charToWord = new Map();
    let wordToChar = new Map();

    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    for (let i = 0; i < words.length; i++) {
        if (charToWord.has(pattern[i])) {
            if (charToWord.get(pattern[i]) !== words[i]) {
                return false;
            }
        }

        if (wordToChar.has(words[i])) {
            if (wordToChar.get(words[i]) !== pattern[i]) {
                return false;
            }
        }

        wordToChar.set(words[i], pattern[i]);
        charToWord.set(pattern[i], words[i]);
    }

    return true;
};