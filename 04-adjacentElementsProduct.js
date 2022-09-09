/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 */

function solution(inputArray) {
    let product = 0;
    /** -Infinity, the lowest 'number' */
    let maxVal = -Infinity;

    for (let i = 0; i < inputArray.length; i++) {
        product = inputArray[i] * inputArray[i + 1];
        if (product > maxVal) {
            maxVal = product;
        }
    }

    return maxVal;
}
