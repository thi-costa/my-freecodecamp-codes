/*
This is a function which returns the greatest palindrome, by a product of
two "n"-digit numbers.
*/

function largestPalindromeProduct(n) {
    let result = null;
    let strMult = ``;

    for (let leftNum = 10 ** n; leftNum > 10 ** (n - 1); leftNum--) {
        for (let rightNum = 10 ** n; rightNum > 10 ** (n - 1); rightNum--) {
            strMult = `${leftNum * rightNum}`;

            if (isPalindrome(strMult)) {
                // console.log(`${leftNum}x${rightNum}=${strMult}`);
                result = Math.max(result, Number(strMult));
            }
        }
    }

    return result;
}
const isPalindrome = (str) => str.split("").reverse().join("") === str;

console.log(largestPalindromeProduct(2));

console.log(largestPalindromeProduct(3));
