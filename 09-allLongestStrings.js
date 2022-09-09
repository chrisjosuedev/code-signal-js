/**
 * Given an array of strings, return another array containing all of its longest strings.
 */

function solution(array) {
    array.sort((a, b) => {
        return b.length - a.length;
    });

    return array.filter((string) => string.length === array[0].length);
}
