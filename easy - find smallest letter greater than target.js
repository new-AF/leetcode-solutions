/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    // copy and sort 'letters' alphabetically
    const array = Array.from(letters).sort();

    // if a letter is alphabetically than 'target' return it
    for (const letter of array) {
        if (letter > target) {
            return letter;
        }
    }

    // did not find solution ; return first element
    return array[0];
};
// tests
for (const { array, letter, expected } of [
    { array: ["c", "f", "j"], letter: "a", expected: "c" },
    { array: ["c", "f", "j"], letter: "c", expected: "f" },
    { array: ["x", "x", "y", "y"], letter: "z", expected: "x" },
]) {
    const result = nextGreatestLetter(array, letter);
    console.log({ array, letter, expected, result });
}
