/**
* Program to merge the collection of intervals.
* Input: Array of pair of integers representing a range.
* Output: Prints the merged intervals.
*/

// assumes that pair1 and pair2 are sorted ranges
function checkIfMergeable(pair1, pair2) {
    return pair2[0] <= pair1[1];
}

// prints the readable collection of intervals
function printIntervals(intervals) {
    let result = intervals.map(e=>`(${e[0]} - ${e[1]})`);
    console.log(result);
}

// merges the interval collection
function mergeIntervals(inputArr) {
    // print the inputArr
    console.log('### Input Interval collection');
    printIntervals(inputArr);

    // sorts the range in increasing order
    const sortedArr = inputArr.sort((a,b)=>a[0] < b[0] ? -1 : 1);

    // print sortedArr
    console.log('### Sorted Intervals');
    printIntervals(sortedArr);

    let mergedIntervals = [];
    // store the merged intervals

    if (sortedArr.length) {
        // check for empty collection
        let currentPair = sortedArr[0];
        // pointer to the track the current interval

        // For each pair check if next sorted pair belongs to the currentPair and merge, If not, consider the next range.
        for (let i = 0; i < sortedArr.length - 1; i++) {
            if (checkIfMergeable(sortedArr[i], sortedArr[i + 1])) {
                currentPair[1] = Math.max(sortedArr[i][1], sortedArr[i + 1][1]);
            } else {
                mergedIntervals.push(currentPair);
                currentPair = sortedArr[i + 1];
            }
        }

        // add the leftout pair
        mergedIntervals.push(currentPair);
    }
    // print mergedIntervals
    console.log('### Merged Intervals');
    printIntervals(mergedIntervals);
}

// case-1
console.log('### case-1')
inputArr = [[1, 3], [2, 6], [8, 10], [9, 11], [15, 18], [2, 4], [16, 17]];
mergeIntervals(inputArr);
// case-2
console.log('\n\n### case-2')
mergeIntervals([]);
