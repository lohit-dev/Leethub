/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let longest = strs[0];

    for (let i = 1; i < strs.length; i++) {
        const word = strs[i];
        let temp = "";

        for (let j = 0; j < word.length; j++) {
            if (word[j] === longest[j]) {
                temp += longest[j];
            } else {
                break;
            }
        }

        if (longest === "") return ""

        longest = temp;
    }

    return longest;
};