/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let text_map = new Map();

    for (let i = 0; i < text.length; i++) {
        if (!text_map.has(text[i])) {
            text_map.set(text[i], 1)
        }else {
            text_map.set(text[i],text_map.get(text[i]) + 1)
        }
    }

    return Math.min(
        text_map.get("b") ?? 0,
        text_map.get("a") ?? 0,
        Math.floor((text_map.get("l") ?? 0) / 2),
        Math.floor((text_map.get("o") ?? 0) / 2),
        text_map.get("n") ?? 0
    );
};