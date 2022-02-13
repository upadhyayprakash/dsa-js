/**
* Program to check if the sum of two array elements is equal to target number.
* Input: 'inputArr' is a array of numbers and 'target' is the sum we're looking for.
* Output: return the indices of the elements adding to 'target', if no such pair exists, return 'Not Found' 
*/
function getSumOfTwo(inputArr, target) {
    let trackMap = new Map();

    // checking if the difference of element i and the 'target' exists in the map and return the index pair.
    for (let i = 0; i < inputArr.length; i++) {
        if (trackMap.has(target - inputArr[i])) {
            return [i, trackMap.get(target - inputArr[i])];
        }
        trackMap.set(inputArr[i], i);
    }
    return 'Not Found';
}

getSumOfTwo([2, 6, 5, 8, 11], 13)
// [3,2]
