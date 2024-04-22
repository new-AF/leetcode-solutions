/**
 * @param {number} x
 * @return {boolean}
 * solution: convert number to string, reverse string and compare original with new
 */
function isPalindrome (number) {
    const str = String(number);
    const array = Array.from(str);
    array.reverse();
    const str2 = array.join("");

    //console.log({array,str2});
    return str === str2;
};

console.log(121, isPalindrome(121));
console.log(-121, isPalindrome(-121));
console.log(10, isPalindrome(10));
