/*
This is a algorithm for searching a sorted array to find an
element. In this code, we see the path it took to find the
element in the search.
*/

function binarySearch(searchList, value) {
    let left = 0;
    let right = searchList.length - 1;
    const arrayPath = [];

    while (left <= right) {
        let midIndex = Math.floor((right + left) / 2);
        let target = searchList[midIndex];
        console.log(
            `Left: ${left}, Right: ${right}\nMid: ${midIndex}, Value: ${value}, Target: ${target}`
        );
        console.log(
            `Search list: ${searchList.slice(
                left,
                right
            )}, len: ${searchList.slice(left, right).length}  \n\n`
        );

        if (searchList[midIndex] === value) {
            console.log("Case 1");
            arrayPath.push(value);

            return arrayPath;
        } else if (searchList[midIndex] < value) {
            left = midIndex + 1;
            arrayPath.push(target);
        } else {
            right = midIndex - 1;
            arrayPath.push(target);
        }
    }

    return "Value Not Found";
}

let testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70,
];
console.log(binarySearch(testArray, 0));
console.log(binarySearch(testArray, 1));
console.log(binarySearch(testArray, 2));

testArray = [1, 2, 3, 4, 5, 6, 7];
//console.log(binarySearch(testArray, 5));
