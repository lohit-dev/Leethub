/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function(startTime, endTime) {
    let s = startTime.split(":")
    let e = endTime.split(":")
    let x = []

    for (let i = 0; i < 3; i+=1) {
        let sub = Number(e[i]) - Number(s[i])
        x.push(sub)
    }
    
    return x[0] * 60 * 60 + x[1] * 60 + x[2]
};