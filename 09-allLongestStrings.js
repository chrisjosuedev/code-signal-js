/**
 * Given an array of strings, return another array containing all of its longest strings.
 */

function solution(array) {
    return array.sort((a, b) => { return b.length - a.length})
                .filter((string) => string.length === array[0].length);
}
