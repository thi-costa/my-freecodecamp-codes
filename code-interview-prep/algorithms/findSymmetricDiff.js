/*
Create a function that takes two or more arrays and returns an
array of their symmetric difference. The returned array must
contain onlu unique values (no duplicates)
*/

function sym(...args) {
    const numberArrays = args.length;
    let result = [];

    const symDiff = (a, b) => {
        const inANotB = [
            ...new Set(a.filter((element) => !b.includes(element))),
        ];
        const inBnotA = [
            ...new Set(b.filter((element) => !a.includes(element))),
        ];

        return inANotB.concat(inBnotA);
    };

    for (let i = 0; i < numberArrays; i++) {
        result = symDiff(result, args[i]);
    }

    return result;
}
sym([1, 2, 3], [5, 2, 1, 4]);

// Some tests cases
let result = sym([1, 2, 3, 3], [5, 2, 1, 4]);
console.log(result);

result = sym([1, 2, 3], [5, 2, 1, 4, 5]);
console.log(result);
