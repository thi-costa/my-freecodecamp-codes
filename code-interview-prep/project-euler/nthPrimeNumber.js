/*
This function returns the nth prime number in the sequence of prime numbers.
*/

function nthPrime(n) {
    let arrayPrimes = [2, 3];
    let cont = 0;
    let nthPrimeNumber = null;
    let primeVerify = false;
    let numberIter

    if (n === 1) {
        return 2;
    } else if (n === 2) {
        return 3;
    }

    numberIter = arrayPrimes[arrayPrimes.length - 1];

    while (cont < n-1) {
        primeVerify = false;

        while (!primeVerify) {
            // console.log(numberIter);
            if (isPrime(numberIter)) {
                primeVerify = true;
                arrayPrimes.push(numberIter);
                
            }
            numberIter += 2;
            // console.log(numberIter);
        }

        cont++;
    }

    return arrayPrimes[arrayPrimes.length - 1];
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

console.log(nthPrime(10001));
console.log(nthPrime(3));
console.log(nthPrime(2));
