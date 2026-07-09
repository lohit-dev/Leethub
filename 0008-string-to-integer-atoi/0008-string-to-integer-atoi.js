/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    
    let cleaned = s.trimStart();
    let num = "";
    let i = 0

    if (cleaned[i] === "+" || cleaned[i] === "-") {
        num += cleaned[i];
        i++;
    }


    while (i < cleaned.length) {
        if (/\d/.test(cleaned[i])) {
            num += cleaned[i];
        } else {
            break;
        }
        i++;
    }

    if (num === "" || num === "+" || num === "-") {
        return 0;
    }

    let ans = Number(num);
    if(ans > INT_MAX) return INT_MAX
    if (ans < INT_MIN) return INT_MIN
    
    return ans
};