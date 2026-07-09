 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function(nums) {
    let map = new Map()
    let maxRange = 0
    let res = 0

    for(let i = 0; i < nums.length; i++ ) {
        let curr = nums[i].toString().split("").sort().join("")
        let range = Number(curr[curr.length-1]) - Number(curr[0])

        // maxRange = Math.max(range, maxRange)
        if(range > maxRange){
            maxRange = range
            res = nums[i]
        } else if (range === maxRange){
            res += nums[i]
        }
        
        // if (!map.has(range)) {
        //    map.set(range, 0)
        // }

        // map.set(range,map.get(range) + nums[i])
    }

    // return map.get(maxRange)    
    return res;
};