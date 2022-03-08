/*
The "fibonacci" function returns the fibonacci term in the sequence (starting by 1)
    1, 2, 3, 5, 8, ...
The "fiboEvenSum" function returns the sum of the even-valued terms, which does not
exceed the parameter "n"
*/

function fiboEvenSum(n) {
    let sum = 0;
    let term = 0;
    let contTerms = 1;

    while (term <= n) {
        term = fibonacci(contTerms);

        if (term > n) {
            return sum;
        }

        term % 2 === 0 ? (sum += term) : {};
        contTerms++;
    }

    return sum;
}

function fibonacci(n) {
    let newTerm;
    if (n > 2) {
        newTerm = fibonacci(n - 1) + fibonacci(n - 2);
    } else if (n === 2) {
        return 2;
    } else if (n === 1) {
        return 1;
    }

    return newTerm;
}

console.log(fiboEvenSum(10));
console.log(fibonacci(8));
