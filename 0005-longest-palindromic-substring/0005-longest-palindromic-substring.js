/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return s;
    let longest = "";

    for(let i = 0; i < s.length; i++){
        let left = i,right = i
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            let curr = s.substring(left, right + 1)
            let len = curr.length
            if (len > longest.length) {longest = curr}

            left--;
            right++;
        }

        left = i, right = i + 1
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            let curr = s.substring(left, right + 1)
            let len = curr.length
            if (len > longest.length) {longest = curr}

            left--;
            right++;
        }
    }

    return longest;
};