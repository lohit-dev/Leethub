/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const lastSeen = {
        a: -1,
        b: -1,
        c: -1
    };

    let count = 0;

    for (let i = 0; i < s.length; i++) {
        lastSeen[s[i]] = i;

        if (lastSeen.a !== -1 &&
            lastSeen.b !== -1 &&
            lastSeen.c !== -1) {

            const minIndex = Math.min(
                lastSeen.a,
                lastSeen.b,
                lastSeen.c
            );

            count += minIndex + 1;
        }
    }

    return count;
}