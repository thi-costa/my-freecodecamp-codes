/*
That is the method of sorting the array by building a sorted
array at the beginning of the array.

*/

function insertionSort(array) {
    let key;
    let auxIdx;

    array.map((elem1, idx1) => {
        if (idx1 < array.length - 1) {
            key = array[idx1 + 1];
            auxIdx = idx1;
            console.log(`Array antes de iteração ${auxIdx}: ${array}`);

            while (auxIdx >= 0 && key < array[auxIdx]) {
                array[auxIdx + 1] = array[auxIdx];
                auxIdx = auxIdx - 1;
            }

            // Place the element after the one smaller than it
            array[auxIdx + 1] = key;
            console.log(
                `Array depois de iteração: ${array}, key=${key}\n`
            );
        }
    });
    // Only change code below this line
    return array;
    // Only change code above this line
}

console.log(
    insertionSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);
