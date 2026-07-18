/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    return gcd(n*n, n*(n+1))
};

function gcd(x,y) {
    while (y !== 0){
        [x,y] = [y,x%y]
    }

    return x
}