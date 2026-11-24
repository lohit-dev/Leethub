/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const cleaned = s.toLowerCase().split("").filter((s) => (s >= "a" && s <= "z" || s >= "0" && s <= "9")).join("")

    let left = 0
    let right = cleaned.length - 1

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false

        left++
        right--
    }

    return true
};