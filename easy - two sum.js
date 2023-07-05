/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumSlow = function (nums, target) {
    for (const [index, val] of nums.entries()) {
        for (const [index2, val2] of nums.entries()) {
            if (index === index2) {
                continue;
            }
            if (val + val2 === target) {
                return [index, index2];
            }
        }
    }
};

var twoSumFast = function (nums, target) {
    const hm = new Map(nums.map((val, index) => [val, index]));
    for (const [index, val] of nums.entries()) {
        const val2 = target - val;
        if (hm.has(val2) && hm.get(val2) !== index) {
            const index2 = hm.get(val2);
            return [index, index2];
        }
    }
};

/* test cases */
for (const { array, target } of [
    { array: [2, 7, 11, 15], target: 9 },
    { array: [3, 2, 4], target: 6 },
    { array: [3, 3], target: 6 },
]) {
    const result = twoSumFast(array, target);
    console.log({ array, target, result });
}
