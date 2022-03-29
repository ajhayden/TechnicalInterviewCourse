# Unit 3 - Big O Notation

Big O Notation is a foundational skill you need to know! You'll use it in almost everything else in this course.

[Big O Slides](https://docs.google.com/presentation/d/1IJgX7KZNcxY4Azlu3HbtLK5ZFQkk5ZJoIcNDhgqT2Rs/edit?usp=sharing)

## What is Big O? (and why should you care?)
- Describes algorithm efficiency based on input size
- Time vs. space complexity
- Efficient code == good code
- Helps you judge your own solutions and speak intelligently about tradeoffs
- Worst case scenario
- General, simplified math
- When you evaluate Big O, think of how speed will change when the inputs are very large (∞)

![big o complexity chart"](big-o-complexity-chart.jpeg)

## Example 1
- What is the Big O of this algorithm?

```javascript
function printArray(array) {
    for (let i = 0; i < 1000; i++) {
        console.log(array)
    }
}
```

### Solution
- O(1) - constant time
- Input size does not change runtime. The loop will always run 100 times

## Example 2
- What is the Big O of this algorithm?

```javascript
function printString(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("I love technical interviews!")
    }
}
```

### Solution
- O(N) - linear time
- Runtime increases linearly with the array’s size

## Example 3
- What is the time complexity (Big O) of this algorithm?

```javascript
function printPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; i++) {
            console.log(array[i] + "," + array[j])
        }
    }
}
```

### Solution
- O(N2) - quadratic time
- Nested for loop => multiply
- O(N * N) => O(N2)

## Additional Resources
[HackerRank video](https://www.youtube.com/watch?v=v4cd1O4zkGw)

## Rules of Big O
1. Different steps get added
2. Drop constants
3. Different inputs => different variables
4. Drop non-dominant terms

## Practice 1
- What is the time complexity (Big O) of this algorithm?

```javascript
function foo(array) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    for (let i = 0; i < array.length; i++) {
        product *= array[i]
    }

    console.log(sum + ", " + product)
}
```

### Solution
- O(N) - linear time
- O(2N) => O(N)
- Constants don’t matter when inputs approach ∞
- Drop constants!

## Practice 2
- What is the time complexity (Big O) of this algorithm?

```javascript
function foo(array) {
    console.log("What is the algorithm's time complexity?")

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            console.log(array[i])
        }
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i] + array[j])
        }
    }
}
```

### Solution
- O(N2) - quadratic time
- O(1 + N + N2) => O(N2)
- Drop non-dominant terms
- (Big O is focused on the big picture, so the other terms don’t matter)

## Practice 3
- What is the time complexity (Big O) of this algorithm?

```javascript
function printUnorderedPairs(array) {
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (arrayA[i] + arrayB[j]) {
                console.log(arrayA[i] + ", " + arrayB[j])
            }
        }
    }
}
```

### Solution
- O(ab)
- There are multiple inputs, and both matter
- Use variable names intentionally

## Practice 4
- What is the time complexity (Big O) of this algorithm?

```javascript
function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const other = array.length - i - 1
        const temp = array[i]
        array[i] = array[other]
        array[other] = temp
    }
}
```

### Solution
- O(N) - linear time
- O(N/2) => O(N)

## Practice 5
- What is the time complexity (Big O) of this algorithm?

```javascript
function binarySearch(array, item) {
    let left = 0
    let right = array.length - 1
    let guess = Math.floor((right + left) / 2)

    while (right >= left; && array[guess] !== item) {
        if (array[guess] === item) {
            return guess
        } else if (array[guess] < item) {
            right = guess - 1
        } else {
            left = guess + 1
        }

        guess = Math.floor((right + left) / 2)
    }

    return -1
}
```

### Solution
- O(log N) - logarithmic time
- We’re cutting array in half each time
- Log base doesn’t matter in Big O

# Homework Assignment
- Recursion Assignment
- Find assignment under Unit_03_Recursion -> Homework -> README.md
