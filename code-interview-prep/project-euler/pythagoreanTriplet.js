/*
This function return the product of a*b*c, where a, b, c are the natural
numbers that satisfy the relation:
a**2 + b**2 = c**2, a < b < c
And a + b + c = n
*/

function specialPythagoreanTriplet(n) {
    let sumOfabc = n;

    for (let c = Math.floor(n / 3); c < n / 2; c++) {
        let a_minus_b_square = 2 * n * c + c ** 2 - n ** 2;
        let a_minus_b_int = Math.floor(Math.sqrt(a_minus_b_square));
        if (a_minus_b_int ** 2 === a_minus_b_square) {
            let b = (n - c + a_minus_b_int) / 2;
            let a = n - b - c;
            return a * b * c;
        }
    }
}

console.log(specialPythagoreanTriplet(1000));
