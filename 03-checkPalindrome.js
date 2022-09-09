/**
 * Given the string, check if it is a palindrome.
 */

// Easy Solution
function solution(inputString) {
    
    let reversedInput = inputString.split('').reverse().join('')
    
    return (reversedInput === inputString)
    
}

// Practical Solution
function solutionAlternative(inputString) {
    let reverseWord = '';
    for (originalWord of inputString) {
        reverseWord = originalWord + reverseWord;
    }

    return reverseWord === inputString;
}
