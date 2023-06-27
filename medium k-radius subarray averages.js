/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    // window length
    const diameter = 2 * k + 1;
    const length = nums.length;

    // get min and max possible inclusive indicies
    const min = k;
    const max = length - 1 - k;

    // fill return array with error values
    const ans = new Array(length).fill(-1);

    // precompute sum of the first k radius
    const sumOrig = nums.slice(0, diameter).reduce((acc, el) => acc + el, 0);
    if (min <= max && min < length) {
        ans[min] = sumOrig;
    }

    // rolling sum variable
    let sum = sumOrig;

    // compute rolling sum, starting at the second radius
    for (let i = min + 1; i <= max && i < length; i++) {
        // remove  and add element just before and after current window respectively
        const sumCurrent = sum - nums[i - k - 1] + nums[i + k];
        ans[i] = sumCurrent;
        sum = sumCurrent;
    }

    // compute average
    for (let i = min; i <= max && i < length; i++) {
        ans[i] = Math.trunc(ans[i] / diameter);
    }
    return ans;
};
/* tests */
for (let [array, k] of [
    [[7, 4, 3, 9, 1, 8, 5, 2, 6], 3],
    [[100], 0],
    [[1], 100],
    [[1, 11, 17, 21, 29], 4],
]) {
    console.log({ array, k, result: getAverages(array, k) });
}
