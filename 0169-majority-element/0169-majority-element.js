/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let elements = -1
    let count = 0

    for(let i = 0; i < nums.length; i++){
        if (count === 0) {
            elements = nums[i]
            count = 1
        } else if (nums[i] == elements) {
            count += 1
        } else {
            count -= 1
        }
    }

    count = 0
    for (let i = 0; i< nums.length;i++){
        if (nums[i] === elements) {
            count++;
        }
    }


    return count > nums.length / 2 ? elements : -1;
};