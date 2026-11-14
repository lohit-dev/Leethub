/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount, memo = {}) {
    let minCount = Infinity;

    if (amount in memo) return memo[amount];
    if (amount < 0) return -1
    if (amount === 0) return 0;

    for (let coin of coins) {
        const diff = amount - coin;

        const result = coinChange(coins, diff, memo);

        // here +1 is added because we need to know how many level's it took until
        // we reached zero basically and when we reach zero we don't want the zero
        // to be returned that's why we add plus 1 so that we know levels
        if (result !== -1) {
            minCount = Math.min(minCount, result + 1);
        }
    }

    memo[amount] = minCount === Infinity ? -1 : minCount;
    return memo[amount];
};