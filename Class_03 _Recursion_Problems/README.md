# Class 3 - Recursion

## Understanding Recursion
- Recursion is a method that calls itself and is conditioned on a parameter that if met the process will end
    - Base case: When would the process complete?
    - Sub-problem: What is the smallest subset of work to be performed?

### Practice Time
Recursion Practice
- Write a program that creates the value in the fibonacci sequence given n
    - 1, 1, 2, 3, **5**, 8, 13, 21, 34

### Practice Solution
    def find_fib(n):
        if n == 0 or n==1:
            return n
        else:
            return find_fib(n - 1) + find_fib(n - 2)

## The Call Stack
Explain what a call stack is

### Practice Time
On a piece of paper create the call stack for the fibonacci sequence

## Solving Recursion Big O
- O (branches^depth)
    - Fibonacci Sequence?
        - O(2^n)

## Iterative Approach
Notice the code is more complex and less elegant
```python
def find_fibonacci_sequence(n):
    if (n == 0):
        return 0
    elif (n == 1):
        return 1
    elif (n > 1):
        fn = 0
        fn1 = 1
        fn2 = 2
        for i in range(3, n):
            fn = fn1 + fn2
            fn1 = fn2
            fn2 = fn
        return fn
    else:
        return -1
```

## Practice Problems
Remember the following principles when you practice:
1. Breathe
2. Listen to understand
3. Use examples
4. State a brute force solution
5. Optimize
6. Break it down
7. Solve or simplify
8. Look back and refactor/test

### Recursion Problems (Easy)
Problem 1
- Write a function that reverses a string using recursion
Problem 2
- Write a function that checks if a string is a palindrome using recursion
Problem 3
- Write a function that sums all natural numbers that lead up to a given value using recursion
Problem 4
- Write a function that calculates the power of a number given a base number and exponent using recursion

*An empty file to write code for these problems can be found under Class_03_Recursion -> Practice_Easy -> Problems. Additionally, solutions for each problem can be found under Class_03_Recursion -> Practice_Easy -> Solutions.*

### Recursion Problems (Medium)
Problem 1
- Write a function that converts a decimal into binary

*An empty file to write code for these problems can be found under Class_03_Recursion -> Practice_Medium -> Problems. Additionally, solutions for each problem can be found under Class_03_Recursion -> Practice_Medium -> Solutions.*

# Homework Assignment
- Array (Easy) Assignment
- Find assignment under Class_04_Array_Problems_Easy -> Array_Problems_Easy_Homework -> Homework Description
