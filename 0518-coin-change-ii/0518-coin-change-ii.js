/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins, i = 0, memo = {}) {
    let include = 0
    const key = `${i}-${amount}`

    if (amount === 0) return 1
    if (i === coins.length) return 0
    if (key in memo) return memo[key]

    if (amount >= coins[i]) {
        include = change(amount - coins[i], coins, i, memo)
    }
    const exclude = change(amount, coins, i + 1, memo)
    memo[key] = include + exclude
    return memo[key]
};