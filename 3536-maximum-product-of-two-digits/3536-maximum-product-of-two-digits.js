/**
 * @param {number} n
 * @return {number}
 */
// var maxProduct = function (n) {
//     const nums = n
//         .toString()
//         .split("")
//         .map(Number)
//         .sort((a, b) => b - a);

//     return nums[0] * nums[1];;
// }

var maxProduct = function (n) {
    let largestDigit = 0;
    let secondLargestDigit = 0;

    while (n > 0) {
        const currentDigit = n % 10;

        if (currentDigit >= largestDigit) {
            secondLargestDigit = largestDigit;
            largestDigit = currentDigit;
        } else if (currentDigit > secondLargestDigit) {
            secondLargestDigit = currentDigit;
        }

        n = Math.floor(n / 10);
    }

    return largestDigit * secondLargestDigit;
}