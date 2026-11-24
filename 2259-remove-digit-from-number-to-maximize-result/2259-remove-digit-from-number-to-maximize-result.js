/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit, i = 0) {
    if (i === number.length) return ""

    const exclude = removeDigit(number, digit, i + 1)
    if (number[i] !== digit) return exclude

    const include = number.slice(0, i) + number.slice(i + 1)

    if (include > exclude) return include
    return exclude
};