/**
* Program to count number of invesions in an array. It uses MergeSort technique (Divide-and-Conquer)
* Input: 'inputArr' is the given array of integers
* Output: Count of inversions and the sorted array
* Complexity:
*   Time: O(nlog(n)) --> Linearithmic function
*   Space: O(n) --> For storing the sub-array elements.
*/
function merge(left, right) {
    let result = [];
    let inv_count = 0;

    // run until both the arrays have at least 1 element
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            // Array.shift() takes out elements from 0th index and re-arranges.
            result.push(left.shift())
        } else { // arr[i] > arr[j], case of inversion
            result.push(right.shift());
            inv_count += left.length;
        }
    }

    // merging the result with remaining of 'left' and 'right' arrays
    return {
        inv_count,
        result: [...result, ...left, ...right]
    };
}

function mergeSort(inputArr) {
    let inv_count = 0;
    // midIndex of array
    let mid = parseInt(inputArr.length / 2, 10);

    // return if single element in array
    if (inputArr.length < 2)
        return {
            inv_count, // returns 0 always
            result: inputArr
        };

    // get the sorted left sub-array and the inversion count.
    let {inv_count: invCountLeft, result: left} = mergeSort(inputArr.splice(0, mid));

    // get the sorted right sub-array and the inversion count.
    let {inv_count: invCountRight, result: right} = mergeSort(inputArr);

    // return the merged arrays sorted by integers
    let {inv_count: mergeInvCount, result} = merge(left, right);

    // add all the inversion counts
    inv_count += invCountLeft + invCountRight + mergeInvCount;

    return {
        inv_count,
        result
    };
}

inputArr = [5, 3, 2, 4, 1];
console.log(`Input Array: ${inputArr}`);
const {inv_count, result} = mergeSort(inputArr);
console.log(`Sorted Array: ${result}`);
console.log(`Number of Inversions: ${inv_count}`)
