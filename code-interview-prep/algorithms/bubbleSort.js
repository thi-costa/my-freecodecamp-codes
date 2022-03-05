/*
Implementation of Bubble sort list algorithm
*/

function bubbleSort(array) {

    array.map((_element1) =>
        array.map((element2, indexJ) => {
            if (array[indexJ] > array[indexJ + 1]) {
                array[indexJ] = array[indexJ + 1];
                array[indexJ + 1] = element2;
            }
        })
    );

    return array;
}

console.log(
    bubbleSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);
