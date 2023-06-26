/**
 * @param {number} length
 */

var SnapshotArray = function (length) {
    this.arrayLength = length;

    // current values
    this.values = new Array(length).fill(0);

    // update these indicies
    this.update = new Map();

    // index -> snap ids array
    this.indexSnaps = new Map();
    this.values.forEach((_, index) => {
        this.indexSnaps.set(index, []);
        this.update.set(index, 0);
    });

    // "index, snap id" -> value
    this.hm = new Map();

    // current snap id
    this.snapId = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
    if (index >= this.arrayLength || index < 0) {
        return;
    }
    if (this.values[index] !== val) {
        this.update.set(index, val);
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    const snapId = this.snapId;
    this.snapId = snapId + 1;

    // mark which indices changed?
    this.update.forEach((newValue, index) => {
        // save new snap id and current value
        this.indexSnaps.get(index).push(snapId);
        this.hm.set(`${index} ${snapId}`, newValue);
        // overwrite values to store new values
        this.values[index] = newValue;
    });

    // probaly heaviest operation
    this.update.clear();
    return snapId;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    if (index >= this.arrayLength || index < 0) {
        return;
    }

    let lastId;
    const array = this.indexSnaps.get(index);
    for (let i = array.length - 1; i >= 0; i -= 1) {
        lastId = array[i];
        // e.g. snap_id = 3; array = [0,2,4,5]
        if (snap_id >= lastId) {
            break;
        }
    }

    const ans = this.hm.get(`${index} ${lastId}`);
    return ans;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

// test cases
const obj = new SnapshotArray(1);
const index = 0;
const snap_id0 = obj.snap(); //index=0, snapid=0 [0]
const snap_id1 = obj.snap();
obj.set(index, "test");
const snap_id2 = obj.snap(); //index=0, snapid=2 [test]
console.log(obj.get(index, snap_id2)); //[test]
obj.set(index, "case");
console.log(obj.get(index, snap_id1)); //[0]
const snap_id3 = obj.snap();
console.log(obj.get(index, snap_id3)); //[case]
