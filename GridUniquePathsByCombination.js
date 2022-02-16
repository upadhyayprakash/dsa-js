/**
* Program to calculate number of uniques paths in a Grid, given the source and destination locations.
*
* Input: Size of the Grid (m, n), and you can only move 'Right' or 'Down' inside the grid.
* Output: number of unique paths between 'Source' and 'Destination'
*
* Complexity:
*   Time: O(m-1) or O(n-1), depending on how we calculate 'r'
*   Space: O(1)
*
* For this Combinatorial approach, refer "take U forward" YouTube video: https://youtu.be/t_f0nwwdg5o
*/
function getNumOfUniquePaths(m, n) {
    let N = m + n - 2; // possible combinations
    let r = m - 1; // nC1 or nC2, both should work

    let result = 1;

    // nCr calculation
    for (let i = 1; i <= r; i++)
        result *= (N - r + i) / i;

    return result;
}

let m = 500;
let n = 500;

console.log(getNumOfUniquePaths(m, n));
