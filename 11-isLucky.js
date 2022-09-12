/**
 * Ticket numbers usually consist of an even number of digits. 
 * A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

    Given a ticket number n, determine if it's lucky or not
 */

/** Solution #1 */
function solution(n) {
    let halfNumber = String(n).length / 2;

    let firstPair = String(n).slice(0, halfNumber);
    let secondPair = String(n).slice(halfNumber);

    let firstSum = 0;
    let secondSum = 0;

    for (const firstValue of firstPair) {
        firstSum += parseInt(firstValue);
    }

    for (const secondValue of secondPair) {
        secondSum += parseInt(secondValue);
    }

    return firstSum === secondSum;
}

/** Solutions #2 */
function solution2(n) {
    const numbers = String(n).split('');
    const numbersToInt = numbers.map(Number);

    const halfNumber = numbersToInt.length / 2;

    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < numbersToInt.length; i++) {
        if (i >= halfNumber) {
            secondSum += numbersToInt[i];
        } else {
            firstSum += numbersToInt[i];
        }
    }

    return firstSum === secondSum;
}
