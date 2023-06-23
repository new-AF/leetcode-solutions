// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let [n1, n2] = [l1, l2];
    let x1, x2;
    let carry = 0;

    let tail = undefined;
    let head = undefined;

    // traverse list
    while (n1 !== null || n2 !== null) {
        // if no more nodes; use 0
        if (n1 === null) {
            x1 = 0;
        } else {
            x1 = n1.val;
            n1 = n1.next;
        }
        // if no more nodes; use 0
        if (n2 === null) {
            x2 = 0;
        } else {
            x2 = n2.val;
            n2 = n2.next;
        }
        const sum = carry + x1 + x2;
        // left digit
        carry = Math.trunc(sum / 10);
        // right digit; 'val' of a Node
        const newval = sum % 10;

        // build the new list; initialize or set .next
        if (head === undefined) {
            head = new ListNode(newval);
            tail = head;
        } else {
            tail.next = new ListNode(newval);
            tail = tail.next;
        }

        //console.log({x1, x2, sum, newval, carry, head})
    }

    //add tail carry if not 0
    if (carry !== 0) {
        tail.next = new ListNode(carry);
        tail = tail.next;
    }
    //cap the list
    tail.next = null;

    //console.log({head});
    return head;
};

// convert an array to ListNode s
const toListNodes = (...array) => {
    const head = new ListNode();
    let tail = head;

    array.forEach((element, index) => {
        if (index === 0) {
            tail.val = element;
            return;
        }
        tail.next = new ListNode(element);
        tail = tail.next;
    });

    tail.next = null;
    return head;
};

// convert ListNode s to array
const toArray = (list) => {
    const array = [];
    let head = list;
    while (head !== null) {
        array.push(head.val);
        head = head.next;
    }
    return array;
};

//test cases
for (let [expected, l1, l2] of [
    [toListNodes(7, 0, 8), toListNodes(2, 4, 3), toListNodes(5, 6, 4)],
    [toListNodes(0), toListNodes(0), toListNodes(0)],
    [
        toListNodes(8, 9, 9, 9, 0, 0, 0, 1),
        toListNodes(9, 9, 9, 9, 9, 9, 9),
        toListNodes(9, 9, 9, 9),
    ],
]) {
    console.log({
        list1: toArray(l1),
        list2: toArray(l2),
        expected: toArray(expected),
        result: toArray(addTwoNumbers(l1, l2)),
    });
}
