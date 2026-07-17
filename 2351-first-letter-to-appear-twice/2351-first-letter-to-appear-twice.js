/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
   const map = {} 

   for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1

    if (map[s[i]] === 2) {
        return s[i]
    }
   }
};