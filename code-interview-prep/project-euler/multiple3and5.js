/*
This function should sum all multiple of 3 or 5 which are below the
parameter provided "number"
*/
function multiplesOf3and5(number) {
    let sum = 0;

    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(multiplesOf3and5(10));
console.log(multiplesOf3and5(49));
console.log(multiplesOf3and5(1000));
