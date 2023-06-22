/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    /* bitwise operators convert a number to 32bit integer */

    // set [min, max] range as 32bit integers
    const min = -(2 ** 31) | 0;
    const max = (-min - 1) | 0;

    // PART 1;
    // convert a number to array of digits
    const getDigits = (x) => {
        const array = [];

        // x1 = integer part of operation x1 / 10
        let x1 = x | 0;

        // x2 = last digit
        let x2;

        while (true) {
            x2 = x1 % 10;
            // keep only the integer part
            x1 = (x1 / 10) | 0;

            // push digit to front
            array.unshift(x2);

            // break when 0
            if (x1 === 0) {
                break;
            }
        }
        return array;
    };

    // convert array of digits to a number
    const getNumber = (array) => {
        let i = 0;
        const length = array.length;

        array.forEach((el, index) => {
            const value = el * 10 ** (length - 1 - index);
            i += value;
        });

        return i;
    };

    // get min, max, x as array of digits
    const xArray = getDigits(x).reverse();
    const xLength = xArray.length;

    const minArray = getDigits(min);
    const minLength = minArray.length;

    const maxArray = getDigits(max);
    const maxLength = maxArray.length;

    //console.log({min, max, x, xArray, xLength, 'getNumber(xArray)':getNumber(xArray), minArray, minLength, 'getNumber(minArray)':getNumber(minArray), maxArray, maxLength, 'getNumber(maxArray)':getNumber(maxArray)});

    // PART 2;
    // return 0 immediately
    if (xLength > minLength || xLength > maxLength) {
        return 0;
    }

    // compare digit by digit
    if (xLength === minLength) {
        // there is at least one digit in minArray that is < xdigit
        let hasMinDigit = false;
        for (let i = 0; i < xLength; i++) {
            const xdigit = xArray[i];
            const minDigit = minArray[i];
            // if found break, else set it
            if (hasMinDigit === true) {
                break;
            } else {
                hasMinDigit = minDigit < xdigit;
            }
            //console.log('---', {xdigit, minDigit, hasMinDigit})
            // return 0 immediately
            if (hasMinDigit === false && xdigit < minDigit) {
                return 0;
            }
        }
    }

    // compare digit by digit
    if (xLength === maxLength) {
        // there is at least one digit in minArray that is > xdigit
        let hasMaxDigit = false;
        for (let i = 0; i < xLength; i++) {
            const xdigit = xArray[i];
            const maxDigit = maxArray[i];
            // if found break, else set it
            if (hasMaxDigit === true) {
                break;
            } else {
                hasMaxDigit = maxDigit > xdigit;
            }
            //console.log('+++', {xdigit, maxDigit, hasMaxDigit})
            // return 0 immediately
            if (hasMaxDigit === false && xdigit > maxDigit) {
                return 0;
            }
        }
    }

    // otherwise join the reversed digits array, as i32
    return getNumber(xArray) | 0;
};

// test cases
console.log({
    123: reverse(123),
    "-123": reverse(-123),
    1534236469: reverse(1534236469),
    "-2147483648": reverse(-2147483648),
});
