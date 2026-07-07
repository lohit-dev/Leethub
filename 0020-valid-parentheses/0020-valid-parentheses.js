/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    let brackets = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    for (let i = 0; i < s.length; i++){
        // Closing 
        if (brackets[s[i]]) {
            if (stack.length === 0) {
                return false;
            }

            if (stack.pop() !== brackets[s[i]]) {
                return false;
            }
        } else {
            // Opening 
            stack.push(s[i]);
        }
    }

    return stack.length === 0
};