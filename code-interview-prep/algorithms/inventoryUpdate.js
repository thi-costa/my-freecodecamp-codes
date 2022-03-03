/*
Compare and update the inventory of an current array (curInv)
with the new inventory (newInv).
*/

function updateInventory(arr1, arr2) {
    const itemsArr1 = arr1.map((element) => element[1]);

    arr2.map((element, index) => {
        if (itemsArr1.includes(element[1])) {
            let indexArr1 = itemsArr1.indexOf(element[1]);
            arr1[indexArr1][0] += element[0];
        } else {
            arr1.push(element);
        }
    });

    const finalResult = arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        }

        return 0;
    });

    return finalResult;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];

updateInventory(curInv, newInv);

console.log(updateInventory(curInv, newInv));
