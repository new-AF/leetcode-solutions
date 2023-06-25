/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const arrayLength = nums.length;
    const logTemp = Math.log2(arrayLength);
    /*
     * if length === 0 then loop 0 times
     * if length === 1 then loop 1 time
     * else loop 1 + Math.ceil(logTemp) times
     */
    const times =
        arrayLength === 0 ? 0 : arrayLength === 1 ? 1 : Math.ceil(logTemp) + 1;

    let startIndex = 0;
    let endIndex = arrayLength;
    for (let i = 0; i < times; i++) {
        const length = endIndex - startIndex;
        const indexTemp = Math.floor(length / 2);
        const index = startIndex + indexTemp;
        const element = nums[index];

        if (element === target) {
            const result = index;
            return result;
        } else if (element > target) {
            endIndex = index;
        } else {
            //go second half
            startIndex = index;
        }
    }

    const result = -1;
    return result;
};
//test case
for (let [array, target] of [
    [[], 1],
    [[1], 1],
    [[1, 2], 1],
    [[1, 2, 3], 1],
    [[1, 2, 3, 4], 1],
    [[-1, 0, 3, 5, 9, 12], -1],
    [[-1, 0, 3, 5, 9, 12], 9],
    [[-1, 0, 3, 5, 9, 12], 12],
    [[-1, 0, 3, 5, 9, 12], 19],
]) {
    const result = search(array, 1);
    console.log({ array, target, result });
}
