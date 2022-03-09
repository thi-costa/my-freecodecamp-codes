/*
Function which returns the smallest multiple by each of the numbers between
1 and "max" parameters
*/
function smallestMult(max, min = 1) {
    const range = (min, max) => {
        let arr = [];
        for (let i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    };

    const greatestCommonDivisor = (num1, num2) =>
        !num2 ? num1 : greatestCommonDivisor(num2, num1 % num2);

    const lowestCommonDenominator = (num1, num2) =>
        (num1 * num2) / greatestCommonDivisor(num1, num2);

    let result = min;

    range(min, max).forEach(function (n) {
        result = lowestCommonDenominator(result, n);
        console.log(result);
    });

    return result;
}

smallestMult(20);
