/**
* Program to calculate number of uniques paths in a Grid, given the source and destination locations.
*
* Input: Size of the Grid (m, n), and you can only move 'Right' or 'Down' inside the grid.
* Output: number of unique paths between 'Source' and 'Destination'
*
* Complexity:
*   Time: Exponential
*   Space: Exponential
*/
function getNumOfUniquePaths(m, n, i=0, j=0) {
    // base conditions
    if (i >= m || j >= n) {
        return 0; // invalid step, out of boundary hence return 0
    }
    if (i === (m - 1) && j === (n - 1)) {
        return 1; // reach destination, hence return 1 for this recursion path
    }

    // Using 'right' and 'down' as possible transitions, we expore every possible steps to finally reach the 'destination', while being inside the grid boundaries (check base condition).
    return getNumOfUniquePaths(m, n, i + 1, j) + getNumOfUniquePaths(m, n, i, j + 1);
}

let m = 15;
let n = 15;

console.log(getNumOfUniquePaths(m, n));
