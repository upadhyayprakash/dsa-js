Source: [YouTube - Algorithms by Abdul Bari](https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O)

### Index
1. [Program to add two integers](#1).
2. [Program to check if an integer is Odd or Even.](#2).
3. [Program to swap two numbers](#3).

### Implementation
1. <a name="1"></a>Program to add two integers.
```javascript
  /**
  * Program to add two integers.
  *
  * Input: 'n1' and 'n2' are integer parameters
  * Output: return the addition of the two integers.
  */
  function add(n1, n2) {
    return n1 + n2;
  }
```

2. <a name="2"></a>Program to check if an integer is Odd or Even.
```javascript
  /**
  * Program to check if passed integer is Odd/Even.
  *
  * Input: 'num' is an integer parameter.
  * Output: return 'Odd' or 'Even'
  */
  function oddOrEven(num) {
    // check if remainder is '0' when divided by 2
    return num % 2 === 0 ? "Even" : "Odd";
  }
```

3. Program to swap two numbers.
```javascript
  /**
  * Program to swap two numbers
  * Input: 'num1' and 'num2' are numbers to be swapped.
  * Output: Prints two swapped numbers.
  */

  function swapTwoNos(num1, num2) {
    console.log(num1, num2);
    // Destructuring assignment and Array matching
    [num1, num2] = [num2, num1];
    console.log(num1, num2);
  }
```

4. 