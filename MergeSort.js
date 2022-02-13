/**
* Program to sort an array using MergeSort technique (Divide-and-Conquer)
* Input: inputArr is the given array of integers
* Output: Array of sorted integers
* Complexity:
*   Time: O(nlog(n)) --> Linearithmic function
*   Space: O(n) --> For storing the sub-array elements.
*/
function merge(left, right) {
    let result = [];

    // run until both the arrays have at least 1 element
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            // Array.shift() takes out elements from 0th index and re-arranges.
            result.push(left.shift())
        } else
            result.push(right.shift());
    }

    // merging the result with remaining of 'left' and 'right' arrays
    return [...result, ...left, ...right];
}

function mergeSort(inputArr) {
    // midIndex of array
    let mid = parseInt(inputArr.length / 2, 10);

    // return if single element in array
    if (inputArr.length < 2)
        return inputArr;

    // return the merged arrays sorted by integers
    return merge(mergeSort(inputArr.splice(0, mid)), mergeSort(inputArr));
}

inputArr = [2, 4, 1, 9, 7, 1, 5];
console.log('Input Array');
console.log(inputArr);
console.log('Merged Array');
mergeSort(inputArr);
