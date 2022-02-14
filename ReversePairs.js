/**
* Program to find the important reverse Pairs in an array (uses Divide-and-Conquer technique - modified MergeSort with inverse count algo)
* Explanation: An important ReversePair is a pair of array elements (i,j) where i < j and arr[i] > 2*arr[j]
* Eg. [9, 2, 4, 1] has 4 important reverse pairs, viz. (9,2), (9,4), (9,1) and (4,1)
*
* Input: 'inputArr' is the given array of integers
* Output: Count of ReversePairs
* Complexity:
*   Time:  --> Linearithmic function
*   Space:  --> For storing the sub-array elements.
*
* For approach, refer take U forward channel: https://youtu.be/S6rsAlj_iB4
*/
function merge(left, right) {
    let result = [];

    let reversePairsCount = 0;

    // calculate the reversePairsCount in the given sub-arrays before merging/sorting the arrays
    for (let i = 0; i < left.length; i++) {
        let j = 0;
        while (j < right.length && left[i] > 2 * right[j]) {
            j++;
        }
        reversePairsCount += j;
    }

    // run until both the arrays have at least 1 element
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            // Array.shift() takes out elements from 0th index and re-arranges.
            result.push(left.shift())
        } else
            result.push(right.shift());
    }

    // merging the result with remaining of 'left' and 'right' arrays
    return {
        reversePairsCount,
        result: [...result, ...left, ...right]
    };
}

function mergeSort(inputArr) {
    let reversePairsCount = 0;

    // midIndex of array
    let mid = parseInt(inputArr.length / 2, 10);

    // return if single element in array
    if (inputArr.length < 2) {
        return {
            reversePairsCount,
            result: inputArr
        };
    }

    // create sub-arrays
    let {reversePairsCount: leftPairCount, result: left} = mergeSort(inputArr.splice(0, mid));
    let {reversePairsCount: rightPairCount, result: right} = mergeSort(inputArr);

    // merged arrays sorted by integers
    let {reversePairsCount: revCount, result} = merge(left, right);

    // adding up the reversePairsCount from sub-arrays.
    reversePairsCount += revCount + leftPairCount + rightPairCount;

    return {
        reversePairsCount,
        result
    };
}

inputArr = [40, 25, 19, 12, 9, 6, 2];
console.log('Input Array');
console.log(inputArr);
console.log('ReversePair Count and Sorted Array');
console.log(mergeSort(inputArr));
