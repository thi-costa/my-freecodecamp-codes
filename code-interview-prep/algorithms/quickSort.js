/*
Sorting with a pivot value, which recursively divide the array in
subarrays which elements are bigger and lower than that pivot
value.
*/

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];

    let left = [];
    let right = [];

    array.map((_elem, idx) => {
        if (idx > 0)
            array[idx] < pivot ? left.push(array[idx]) : right.push(array[idx]);
    });

    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(
    quickSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);
