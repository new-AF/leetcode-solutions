/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // hash map
    const hm = new Map();

    // add only unique elements
    nums.forEach((el) => {
        if (hm.has(el) === false) {
            hm.set(el, 1);
        }
    });

    // overwrite first 'k' indices with the unique elements from 'hm'.
    // iterate as [key, value]
    Array.from(hm).forEach(([key, value], index) => {
        nums[index] = key;
    });

    // remove the rest of old elements, starting from index 'hm.size'
    nums.splice(hm.size);

    //console.log({nums, hm, size: hm.size});

    // return 'k'
    return nums.length;
};

// test cases
for (let array of [
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
]) {
    const oldArray = [...array];
    const uniqueArrayLength = removeDuplicates(array);
    const uniqueArray = array;

    console.log({ oldArray, uniqueArray, uniqueArrayLength });
}
