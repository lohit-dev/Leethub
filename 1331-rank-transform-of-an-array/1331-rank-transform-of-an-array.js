/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let nums = [...arr].sort((a, b) => a - b);

    let rank = 1;
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]]) continue;

        hashmap[nums[i]] = rank;
        rank++;
    }

   return arr.map(num => hashmap[num]);
};