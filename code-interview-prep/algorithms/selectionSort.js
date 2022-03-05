function selectionSort(array) {
    let length = array.length;

    array.map((elem1, i1) => {
        let min = i1; // Index of actual min element

        array.slice(i1 + 1, length).map((elem2, i2) => {
            if (array[min] > array[i2 + i1 + 1]) {
                min = i2 + i1 + 1;
            }
        });

        i1 !== min ? ([array[i1], array[min]] = [array[min], array[i1]]) : {};
    });

    return array;
}

console.log(
    selectionSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);
