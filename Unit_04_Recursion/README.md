# Unit 4 - Recursion

[Recursion Slides](https://docs.google.com/presentation/d/1YBPDu-WAOE7IpuyMX98K8u3djWcQ9clh-tLCwKcEcEU/edit?usp=sharing)
## Understanding Recursion
- Recursion is a method that calls itself. Each recursive algorithm has a condition that, if met, will end the method calls.
    - Base case: The condition that will end the loop of self-calls
    - Sub-problem: What is the smallest subset of work to be performed?

### Practice Time
#### Recursion Practice
- Write a program that creates the value in the fibonacci sequence given n
    - 1, 1, 2, 3, 5, 8, 13, 21, 34

#### Solution
Iterative Approach
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
Notice the code is more complex and less elegant.

Recursive Approach
```python
def find_fib(n):
    if n == 0 or n==1: # the base case
        return n
    else:
        return find_fib(n - 1) + find_fib(n - 2)
```
The recursive solution is much more concise.

## The Call Stack
A call stack is a stack data structure that stores information about the active subroutines of a computer program. Every time a recursive function calls itself, another call is added to the call stack. After the base case stops further calls, the call stack unravels one call at a time until all recursive calls are gone.

Visualizing the call stack can help you solve recursive problems by understanding the steps behind them.

### Practice Time
On a piece of paper create the call stack for the fibonacci sequence.

#### Solution
![fibonacci sequence call stack](fibonacci_sequence_call_stack.jpeg)

## Recursion Big O
Each call on the call stack takes up memory (space complexity). If a recursive function doesn't have a base case, the function will call itself an infinite number of times, the number of calls on the call stack will max out, and a stack overflow will occur.

To calculate the Big O of recursive functions, look at the breadth and depth of the tree.

- O (branches^depth)
    - Fibonacci Sequence?
        - O(2^n)
- [Helpful Stack Overflow post](https://stackoverflow.com/questions/43298938/space-complexity-of-recursive-function)

## Practice Problems
Remember to use the problem solving steps when you practice:
1. Breathe
2. Listen to understand
3. Use examples
4. State a brute force solution
5. Optimize
6. Break it down
7. Solve or simplify
8. Look back and refactor/test

### Recursion Problems
- Problem 1: Write a function that reverses a string using recursion
- Problem 2: Write a function that checks if a string is a palindrome using recursion
- Problem 3: Write a function that sums all natural numbers that lead up to a given value using recursion
- Problem 4: Write a function that calculates the power of a number given a base number and exponent using recursion
- Problem 5: Write a function that converts a decimal into binary

*An empty file to write code for these problems can be found under Unit_03_Recursion -> Practice -> Problems. Additionally, solutions for each problem can be found under Unit_03_Recursion -> Practice -> Solutions.*

# Homework Assignment
- Array Assignment
- Find assignment under Unit_05_Arrays -> Homework -> README.md
