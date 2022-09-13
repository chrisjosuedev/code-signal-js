/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
 * 
 * Ej -> For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
        solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 */

function solution(array) {
    const orderWithTrees = [];
    let sortedIndex = 0;
    
    /** Sort sortable Items and Exclude Trees (-1) */
    const sortableItems = array
        .filter((item) => item > -1)
        .sort((a, b) => a - b);

    /** Review array and check if there is NOT a tree, 
     * we push in orderWithTrees sortedIndex Position from Ordered Array, and add 1 to sorted Index.
     * If There is a tree, push -1 only in current index. */
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== -1) {
            orderWithTrees.push(sortableItems[sortedIndex]);
            sortedIndex++;
        } else {
            orderWithTrees.push(array[i]);
        }
    }

    return orderWithTrees;
}
