/***
 * Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

    Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
 */

function solution(sequence) {
    /** If sequence is decreasing twice, return false
     * Begin with 1, avoid undefined.
     */
    let count = 0;
    for (let i = 1; i < sequence.length; i++) {
        //console.log(sequence[i - 1], sequence[i])
        if (sequence[i - 1] >= sequence[i]) {
            count++;

            if (count > 1) {
                return false;
            }

            if (
                sequence[i - 2] >= sequence[i] &&
                sequence[i - 1] >= sequence[i + 1]
            ) {
                return false;
            }
        }
    }
    return true;
}
