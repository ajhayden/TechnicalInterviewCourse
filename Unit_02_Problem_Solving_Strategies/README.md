# Unit 2 - Problem Solving Strategies

Technical interviews vary depending on the company or the interviewer. However, most interviews are structured similarly and test similar skills. The following steps, problem solving skills, and patterns will help you do your best in any interview. Make sure to apply these concepts as you continue through the rest of the course.

[Problem Solving Strategies Slides](https://docs.google.com/presentation/d/1KF1CUoAgkkPuiTK8u--x3UQYCsYADzc8Zs8rnST5Ea8/edit?usp=sharing)

## Basic Problem Solving Steps

*Adapted from* Cracking the Coding Interview *and Colt Steele's Udemy course (see [Other Resources](https://github.com/ajhayden/TechnicalInterviewCourse/blob/main/Unit_01_Course_Intro_and_Resources/OtherResources.md))*

When given a problem, follow these steps to clearly structure your solution and showcase what you know.

1. Breathe
2. Listen to understand
3. Use examples
4. State a brute force solution
5. Optimize
6. Break it down
7. Solve or simplify
8. Look back and refactor/test

### 1. Breathe
- You don’t need to find the perfect answer
- Communicate
- The interviewers are there to help you
- Don’t give up

### 2. Listen to understand
- Make sure you hear everything correctly
- Listen for unique information. Everything is important. Example: Is an input array sorted or unsorted?
- Write down relevant information
- Get all the pieces ready for you to problem solve

#### Practice Time
- Practice step 2 with the following problem: “Write a function which takes two numbers and returns their sum.”
- Don't move forward until you have completed this practice.
- View [potential solution](https://github.com/ajhayden/TechnicalInterviewCourse/blob/main/Unit_02_Problem_Solving_Strategies/problem_solving_steps/listenToUnderstand.js).

### 3. Use examples
- Ask questions
    - Does the code need to compile?
    - Should I assume valid input?
    - Can I restate the problem in my own words?
    - What are the inputs/outputs? Example: Data types, error handling, etc.
    - How should I label the important pieces of data? Example: Variable names

#### Practice Time
- Practice step 3 with the following problem: “Write a function which takes a string and returns the count of characters in the string.”
- Don't move forward until you have completed this practice.
- View [potential solution](https://github.com/ajhayden/TechnicalInterviewCourse/blob/main/Unit_02_Problem_Solving_Strategies/problem_solving_steps/charCount.js) (see comments next to console.log statements at the end of the file).

#### Possible Answers
- Questions to ask prior to creating examples:
    - What is considered a character? Do spaces count? Do punctuations count? Should uppercase and lowercase characters be counted separately?
- Input: "How are you today?" -> Output: 15
- Input: "I'm good!" -> Output: 8

### 4. State a brute force solution
- Brute force solution (solves the problem, but not efficiently)
- This doesn’t need to be good
- Explain weaknesses
- Benefits
    - Proves you know the most basic solution (not everyone does)
    - Helps you wrap your mind around the problem
    - Gives you a starting point
 
### 5. Optimize
How can you improve the brute force solution?
- Look for unused information from the prompt
- Use a fresh example
- Solve it incorrectly
- Precompute information
- Use problem solving strategies

### 6. Break it down
- Think twice, code once
- Explicitly write down the steps you’re going to take (pseudocode)
- Benefits
    - Keeps you on track
    - Helps communicate your thought process
    - Catch logic mistakes

### 7. Solve or simplify
- Start coding
- If you can’t solve the problem, solve a simpler version and address the difficult part later
- Get some code down, don’t get stuck for too long
- Write clean, beautiful code
- If you get confused, that’s normal! Walk through your example

### 8. Look back and refactor/test
- Is the result correct (including edge cases)?
- Can you derive the result differently?
- Is your code easy to understand at a glance?
- Can you improve the time/space complexity  (Big O)?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## Problem Solving Techniques
You will inevitably get stuck at some point in your problem solving. This is normal! Do what you can to get unstuck. The following techniques can help you further optimize your solution or identify common patterns found in many interview problems when you aren't sure where to go next.

### Optimization Techniques
Source: *Cracking the Coding Interview*

1. Look for BUD
2. DIY
3. Base case and build
4. Data structure brainstorm

#### Look for BUD
Look for the following principles in your solution/brute force:
- Bottlenecks
    - Your algorithm can’t be better than its worst Big O
- Unnecessary work
    - Extra processing that can be eliminated
- Duplicated work

#### DIY
- Forget about the code
- How would you solve it manually?

#### Base Case and Build
- What is a base case?
- Solve the problem for a base case
    - Helps you understand the problem in a simpler state
- Use the pattern you find to extrapolate
- Useful for recursive problems

#### Data Structure Brainstorm
- Think through all the data structures you know
- Consider pros and cons of each one
- Benefits
    - Can help you get unstuck with a solution you didn’t previously think of 

### Patterns
Source: Colt Steele's *JavaScript Algorithms and Data Structures Masterclass*

There are several patterns that are commonly found in interview questions. By understanding these patterns, you'll be able to identify them in real interviews and solve problems quickly and efficiently.

1. Frequency counter
2. Multiple pointers
3. Sliding window
4. Divide and conquer

#### Frequency Counter
- Use objects/sets to collect value frequencies
- Avoids nested loops (O(N2) time complexity)
- Here is a video to help understand frequency counters: https://www.youtube.com/watch?v=UMC638x-9-M

##### Practice Time
- Try solving the following problem using a frequency counter
    - “Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.”
- Don't move forward until you have completed this practice

##### Practice Solution

```javascript
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2]) !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 4], [9, 1, 4, 4])
```

##### Extra Frequency Counter Challenge
- “Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as **cinema**, formed from **iceman**.”
- View [potential solution](https://github.com/ajhayden/TechnicalInterviewCourse/blob/main/Unit_02_Problem_Solving_Strategies/problem_solving_patterns/frequencyCounterAnagram.js).

#### Multiple Pointers
- Create values/pointers to keep track of indices, and move them as needed until solution is found
- [SumZero example](https://github.com/ajhayden/TechnicalInterviewCourse/blob/main/Unit_02_Problem_Solving_Strategies/problem_solving_patterns/multiplePointersSumZero.js)
- Here is a video to help understand multiple pointers: https://www.youtube.com/watch?v=OO6vFDpZItQ

```javascript
// uses multiple pointers
// assumes sorted input
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right -= 1
        } else {
            left += 1
        }
    }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
```

#### Sliding Window
- Create a window to view data
- Move the window depending on certain conditions
- Useful for keeping track of data subset in string/array
- Here is a video to help understand sliding window: https://www.youtube.com/watch?v=qqXOZD4zKEg

```python
# code
import sys
print ("GFG")
# O(n * k) solution for finding
# maximum sum of a subarray of size k
INT_MIN = -sys.maxsize - 1
 
# Returns maximum sum in a
# subarray of size k.
def maxSum(arr, n, k):
 
    # Initialize result
    max_sum = INT_MIN
 
    # Consider all blocks
    # starting with i.
    for i in range(n - k + 1):
        current_sum = 0
        for j in range(k):
            current_sum = current_sum + arr[i + j]
 
        # Update result if required.
        max_sum = max(current_sum, max_sum)
 
    return max_sum

# Driver code
arr = [1, 4, 2, 10, 2,
       3, 1, 0, 20]
k = 4
n = len(arr)
print(maxSum(arr, n, k))
 
# This code is contributed by mits
# https://www.geeksforgeeks.org/window-sliding-technique/
```

#### Divide and Conquer
- Divide data into smaller chunks, then repeat with smaller pieces of data
- Drastically reduces time complexity
- Example: binary search, quicksort, merge sort
- Here is a video to help understand binary search: https://www.youtube.com/watch?v=DE-ye0t0oxE

```python
# Binary Search Example

input_array = [1, 2, 5, 9, 12, 15, 21, 28, 99, 100, 117]
input_target = 5
# Output = 2

def binary_search(nums, target):
    lower_bound = 0
    upper_bound = len(nums) - 1

    while lower_bound <= upper_bound:
        mid_point = (upper_bound + lower_bound) / 2

        if nums[mid_point] == target:
            return mid_point
        else:
            if nums[mid_point] < target:
                lower_bound = mid_point + 1
            else:
                upper_bound = mid_point - 1
    return -1
        
print(binary_search(input_array, input_target))
```
