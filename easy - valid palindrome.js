/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //convert to lower case
    const str = s.toLowerCase();

    //remove all non-alphanumeric characters
    //remove underscores too
    const newstr = str.replace(/[^0-9A-Za-z]/g, "");

    const flipped = Array.from(newstr).reverse().join("");

    const result = flipped === newstr;

    //console.log({str, newstr, flipped, result})

    return result;
};

console.log({ ab_a: [true, isPalindrome("ab_a")] });
console.log({
    "A man, a plan, a canal: Panama": [
        true,
        isPalindrome("A man, a plan, a canal: Panama"),
    ],
});
console.log({ "race a car": [false, isPalindrome("race a car")] });
