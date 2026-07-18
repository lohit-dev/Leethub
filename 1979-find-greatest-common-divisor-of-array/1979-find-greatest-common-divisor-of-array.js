/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let largest = -Infinity, smallest = Infinity
    for (let i = 0; i < nums.length; i++) {
        let currSmall = nums[i]
        let currlarge = nums[i]

        smallest = Math.min(smallest, currSmall)
        largest = Math.max(largest, currlarge)
    }

    return gcd(smallest, largest)
};

function gcd(x,y) {
    if (y === 0) {
        return x
    }

    return gcd(y, x % y)
}