/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const array1 = nums1;
    const array2 = nums2;
    const length1 = array1.length;
    const length2 = array2.length;

    //no elements to compare
    //return immediately
    if (length2 === 0) {
        return array1;
    }

    // shift all numbers to the end to where 'n' 0,0... are located
    //location of first 0
    let indexOfZero = length1 - n;
    for (let i = indexOfZero - 1; i >= 0; i--) {
        array1[i + n] = array1[i];
    }
    //add 'n' zeros to front
    for (let i = 0; i < n; i++) {
        array1[i] = 0;
    }

    let putIndex = 0;
    let index1 = n;
    let index2 = 0;
    let el1;
    let el2;

    //partially sort
    //compare as much as possible of 'array1' and 'array2'
    while (index1 < length1 && index2 < length2) {
        el1 = array1[index1];
        el2 = array2[index2];

        if (el1 <= el2) {
            array1[putIndex] = el1;
            index1 += 1;
        } else {
            array1[putIndex] = el2;
            index2 += 1;
        }
        putIndex += 1;
    }
    //copy rest of array1 into array1[putIndex]
    while (index1 < length1) {
        array1[putIndex] = array1[index1];
        index1 += 1;
        putIndex += 1;
    }
    //copy rest of array2 into array1[putIndex]
    while (index2 < length2) {
        array1[putIndex] = array2[index2];
        index2 += 1;
        putIndex += 1;
    }
};
//test cases
for (let [array1, m, array2, n] of [
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
    [[1], 1, [], 0],
    [[0], 0, [1], 1],
    [[1, 2, 4, 5, 6, 0], 5, [3], 1],
]) {
    const array1Copy = [...array1];
    merge(array1, m, array2, n);
    console.log({ array1Copy, array2, result: array1 });
}
