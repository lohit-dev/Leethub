/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (!Number.isNaN(Number(token))) {
            stack.push(Number(token));
            continue;
        }

        const right = stack.pop();
        const left = stack.pop();

        switch (token) {
            case "+":
                stack.push(left + right);
                break;

            case "-":
                stack.push(left - right);
                break;

            case "*":
                stack.push(left * right);
                break;

            case "/":
                stack.push(Math.trunc(left / right));
                break;
        }
    }

    return stack.pop()
};