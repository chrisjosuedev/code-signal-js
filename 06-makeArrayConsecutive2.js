/**
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
 */

function solution(statues) {
    /** Order Array */
    statues.sort((a, b) => {
        return a - b;
    });
    let newVal = 0;
    let count = 0;

    for (let i = 0; i < statues.length; i++) {
        newVal = statues[i] + 1;
        if (newVal < statues[i + 1]) {
            count = count + (statues[i + 1] - newVal);
        }
    }

    return count;
}
