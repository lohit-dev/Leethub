/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return recursiveSearch(nums, target, 0, nums.length - 1);
};


function recursiveSearch(nums, target, low, high) {
    if (low > high) return -1; // missed this

    let mid = low + Math.floor((high - low) / 2);
    if (target === nums[mid]) return mid;

    if (target < nums[mid]) {
        return recursiveSearch(nums, target, low, mid - 1);
    } else {
        return recursiveSearch(nums, target, mid + 1, high);
    }
}