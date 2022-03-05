/*
Given an array, findpairs whose sum equal the arg of the function.
You cannot use the same indices for each sum.
Each pair should use the lowest possible available indices.
Sum all the indices which satisfy the situation.
*/

function pairwise(arr, arg) {
    let sum = 0; // Final result of the indices sum
    const indexVals = []; // Index vals

    arr.map((_elementOne, indexOne) => {
        let sumVals = 0; // Variable to calculate the pair sum
        if (indexOne < arr.length - 1) {
            arr.map((_elementTwo, indexTwo) => {
                sumVals = arr[indexOne] + arr[indexTwo];
                if (indexTwo > indexOne && sumVals === arg) {
                    sum += indexOne + indexTwo;

                    arr[indexOne] = arr[indexTwo] = NaN; // Deleting values already considered
                }
            });
        }
    });
    return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([], 100));
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 3, 2, 4], 4));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
