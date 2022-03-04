/*
This code returns the number for total permutations for the chars of
a string without repeated consecutive letters.
*/

function getPermutations(str) {
    if (str.length === 1) {
        return [str];
    }
    const permutations = [];

    for (let i = 0; i < str.length; i++) {
        // Split string in a array of chars
        let splitStr = str.split("");

        // Char which permutation is getting done
        let currentElem = splitStr.splice(i, 1)[0];

        // Permute other characters
        let subPermutations = getPermutations(splitStr.join(""));

        // Add permutations to the array
        subPermutations.forEach(function (permutation) {
            permutations.push(currentElem.concat(permutation));
        });
    }

    return permutations;
}

function permAlone(str) {
    const permutations = getPermutations(str);
    const strLen = str.length;

    let result = 0;
    let condition; // Condition will check if there are repeated chars
    let strArrPerm; // Array of chars for each permutation

    permutations.forEach(function (permutation) {
        strArrPerm = Array.from(permutation);
        condition = true;

        strArrPerm.map((_element, index) => {
            if (index < strLen - 1) {
                if (strArrPerm[index] === strArrPerm[index + 1]) {
                    condition = false;
                }
            }
        });
        condition ? result++ : {};
    });

    return result;
}

permAlone("aab");

console.log(permAlone("aabb"));

console.log(getPermutations("aabb"));
