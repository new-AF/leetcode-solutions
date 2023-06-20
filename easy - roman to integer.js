/**
 * easy qurstion
 * roman numerals to integer
 * straigh-forward solution
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const hm = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0;
    Array.from(s).forEach((letter, index, array) => {
        sum += hm[letter];

        //handle special cases
        const hasNext = index + 1 < s.length;

        if (letter === "I" && hasNext) {
            const next = array[index + 1];
            if (next === "V" || next === "X") {
                //subtract 2 times
                sum -= 2 * hm[letter];
            }
        } else if (letter === "X" && hasNext) {
            const next = array[index + 1];
            if (next === "L" || next === "C") {
                //subtract 2 times
                sum -= 2 * hm[letter];
            }
        } else if (letter === "C" && hasNext) {
            const next = array[index + 1];
            if (next === "D" || next === "M") {
                //subtract 2 times
                sum -= 2 * hm[letter];
            }
        }
    });
    return sum;
};
