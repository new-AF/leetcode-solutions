/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const indicies = [];
    nums.forEach((el, index) => {
        if (el === val) {
            indicies.push(index);
        }
    });

    // remove value nums[el - index]
    indicies.forEach((el, index) => nums.splice(el - index, 1));
    return [nums, nums.length];
};

//tests
for (const { target, val, expected, expectedLength } of [
    { target: [3, 2, 2, 3], val: 3, expected: [2, 2], expectedLength: 2 },
    {
        target: [0, 1, 2, 2, 3, 0, 4, 2],
        val: 2,
        expected: [0, 1, 3, 0, 4],
        expectedLength: 5,
    },
]) {
    const [array, length] = removeElement(target, val);
    console.log({ target, val, expected, array, expectedLength, length });
}
