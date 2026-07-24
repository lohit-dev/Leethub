/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let numString = x.toString() 
   let left = 0
   let right = numString.length - 1

   while (left < right) {
    if (numString[left] !== numString[right]) {
        return false
    }
    left++
    right--
   }

   return true
};

