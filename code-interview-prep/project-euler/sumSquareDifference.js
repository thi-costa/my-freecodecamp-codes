/*
This function returns the difference between the sum of the squares
of the first "n" natural numbers, and the square of the sum of the
first "n" natural numbers.
*/

function sumSquareDifference(n) {
    const sumOfSquares = (n) => {
        let result = 0;

        for (let i = 1; i <= n; i++) {
            result += i ** 2;
        }

        return result;
    };

    const squareOfSum = (n) => {
        let result = 0;

        for (let i = 1; i <= n; i++) {
            result += i;
        }

        return result ** 2;
    };

    return squareOfSum(n) - sumOfSquares(n);
}

console.log(sumSquareDifference(100));
