Source: [YouTube - Placement Series by take U forward](https://www.youtube.com/watch?v=S6rsAlj_iB4&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=3)

### Algorithms
1. Merge the intervals that are overlapping in the collection of intervals. [Code](https://github.com/upadhyayprakash/dsa-js/blob/main/MergeIntervals.js)
```javascript
Input: [[1, 3], [2, 6], [8, 10], [9, 11], [15, 18]]
Output: ['(1 - 6)', '(8 - 11)', '(15 - 18)'] // merged intervals
```

2. Sum of Two numbers in an array should be equal to `target`. [Code](https://github.com/upadhyayprakash/dsa-js/blob/main/SumOfTwo.js)
```javascript
Input: [2, 6, 5, 8, 11], 13
Output: [3, 2] // index of elements adding up to '13'
```

3. Count Inversions in Array [Code](https://github.com/upadhyayprakash/dsa-js/blob/main/CountInversions.js)
```javascript
Input: [5, 3, 2, 4, 1]
Output: 8, [1,2,3,4,5] // inv_count, sorted_array
```

4. Important Reverse Pairs in Array [Code](https://github.com/upadhyayprakash/dsa-js/blob/main/ReversePairs.js)
```javascript
Input: [40, 25, 19, 12, 9, 6, 2]
Output: 15, [1,2,3,4,5] // reverse_pairs_count, sorted_array
```

5. Find unique paths in a Grid, from Source to Destination.
- Brute-force Approach [Code](https://github.com/upadhyayprakash/dsa-js/blob/main/GridUniquePathsBruteForce.js)
- Dynamic Programming Approach [Code](https://github.com/upadhyayprakash/dsa-js/blob/main/GridUniquePathsByDP.js)
- Combinatorics Approach [Code](https://github.com/upadhyayprakash/dsa-js/blob/main/GridUniquePathsByCombination.js)
```javascript
Input:
m x n= 15 x 15

Output: 40116600 // possible unique paths
```