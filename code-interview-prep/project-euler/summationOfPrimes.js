/*
Summation of primes implemented, using the Sieve of Eratosthenes ancient
algorithm for finding all prime numbers up to "n" limite.
*/

function primeSummation(n) {
    let primes = sieveOfEratosthenes(n - 1);

    return primes.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });
}

function sieveOfEratosthenes(n) {
    if (n === 1) return null;
    if (n === 2) return n;

    // Array of consecutive integers
    let result = [];
    for (let i = 2; i <= n; i++) {
        result.push(i);
    }

    // Counter
    let cont = 0;

    // First prime number in the list
    let prime = 2;

    while (prime ** 2 <= n) {
        // Remove all multiples of p from the array
        result = result.filter((element) => {
            return element === prime || element % prime !== 0;
        });

        // Check the next prime number
        cont++;
        prime = result[cont];
    }

    return result;
}

console.log(primeSummation(17));
console.log(sieveOfEratosthenes(17));
