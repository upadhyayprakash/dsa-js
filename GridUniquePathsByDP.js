/**
* Program to calculate number of uniques paths in a Grid, given the source and destination locations.
*
* Input: Size of the Grid (m, n), and you can only move 'Right' or 'Down' inside the grid.
* Output: number of unique paths between 'Source' and 'Destination'
*
* Complexity:
*   Time: O(m X n)
*   Space: O(m X n) + Stack usage for O(m X n) = O(m X n)
*
* For this DP approach, refer "take U forward" YouTube video: https://youtu.be/t_f0nwwdg5o
*/
function getNumOfUniquePaths(m, n, dp, i=0, j=0) {
    // base conditions
    if (i >= m || j >= n) {
        return 0; // invalid step, out of boundary hence return 0
    }
    if (i === (m - 1) && j === (n - 1)) {
        return 1; // reach destination, hence return 1 for this recursion path
    }

    // if the state is visited, return the stored result and avoid recursion.
    if (dp[i][j] !== -1)
        return dp[i][j];
    
    // Using 'right' and 'down' as possible transitions, we expore every possible steps to finally reach the 'destination', while being inside the grid boundaries (check base condition). Store the results in the DP 2D HashTable.
    dp[i][j] = getNumOfUniquePaths(m, n, dp, i + 1, j) + getNumOfUniquePaths(m, n, dp, i, j + 1);
    return dp[i][j];

}

let m = 500;
let n = 500;

// Using the Dynamic Programming with 2D HashTable to save the results of the visited states, thereby saving recursive calls.
let dp = new Array(m).fill().map(row=>new Array(n).fill(-1));
console.log(getNumOfUniquePaths(m, n, dp));
