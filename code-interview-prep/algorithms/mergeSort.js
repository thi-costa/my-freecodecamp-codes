/*
The merge method used a divide-and-conquer recursive
methodology, in which the arrays are divided in two
and then each of them is sorted and combined.
*/

function mergeSort(array) {
    if (array.length < 2) return array;

    const middleIdx = Math.floor(array.length / 2);
    console.log(`Middle index: ${middleIdx}`);

    const leftArray = array.slice(0, middleIdx);
    const rightArray = array.slice(middleIdx, array.length);

    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    const mixArrays = (left, right) => {
        const mixed = [];

        while (left.length && right.length) {
            mixed.push(left[0] > right[0] ? right.shift() : left.shift());
        }
        while (left.length) {
            mixed.push(left.shift());
        }
        while (right.length) {
            mixed.push(right.shift());
        }

        console.log(`Mixed: ${mixed}\n`)
        return mixed;
    };

    return mixArrays(sortedLeft, sortedRight);
}

console.log(
    mergeSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);
