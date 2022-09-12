/**
 * Given two strings, find the number of common characters between them.
 */

/*** SOLUTION #1 */

/** No Functions Method */
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


/*** SOLUTION #2 */

/** CodeSignal User -> lifeofnations Solution */
/** Regex and JS Methods */

/** replace(value1, substring) 
 * It will be replace every coincidence (s1 in s2) by a "!" (Could be any character.).
 * then, with /[^!]/g regex, replace every character excepts "!", and get new string length.
*/

function solution2(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], '!');
    }
    return s2.replace(/[^!]/g, '').length;
}
