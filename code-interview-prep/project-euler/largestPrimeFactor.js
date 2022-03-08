/*
Function "largestPrimeFactor" returns the largest prime factor for a "number".
And the auxiliary function "isPrime" returns true if a number is prime, and
false otherwise.
*/

function largestPrimeFactor(number) {
    let largestFactor = null;
    if (number % 2 === 0) {
        largestFactor = 2;
    }

    for (let i = 3; i <= number; i += 2) {
        if (number % i === 0 && isPrime(i)) {
            largestFactor = i;
        }
    }

    return largestFactor;
}

function isPrime(number) {
    if (number !== 2 && number % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= number; i += 2) {
        if (i !== number && number % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(6857));
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(8));
