/**
 * Given two strings, find the number of common characters between them.
 */

function solution(s1, s2) {
    const alreadyIncluded = [];
    let count = 0;

    /** S1 in S2 */
    for (let i = 0; i < s1.length; i++) {
        if (alreadyIncluded.includes(s1[i])) continue;

        let currentFirstString = amountString(s1, s1[i]);
        let currentSecondString = amountString(s2, s1[i]);

        if (currentSecondString > 0) {
            alreadyIncluded.push(s1[i]);
            count += Math.min(currentFirstString, currentSecondString);
        }
    }
    return count;
}

function amountString(string, letter) {
    let index = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) index.push(i);
    }
    return index.length;
}
