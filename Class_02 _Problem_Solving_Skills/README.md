THINGS TO DO IN THIS SECTION:
- Add code to practice Multiple Pointers, Sliding Window, and Divide and Conquer
- Maybe add Youtube clips for those as well
- Add references somewhere in here to the problems in the problem_solving_patterns and problem_solving_steps in this directory

# Class 2 - Problem Solving Skills

The following class will help students to understand best problem solving practices, so they can succeed in any technical interview they will face.

## Basic Problem Solving Steps

Technical interviews can be very different depending on the company or the interviewer. However, most if not all interviews require certain basic skills. The following list are common problem solving steps that would help any interviewee perform well in an interview.

1. Breathe
2. Listen to understand
3. Use examples
4. State a brute force solution
5. Optimize
6. Break it down
7. Solve or simplify
8. Look back and refactor/test

### 1. Breathe
Remember:
- You don’t need to find the perfect answer
- Communicate!
- The interviewers are there to help you
- Don’t give up

### 2. Listen to understand
- Make sure you hear everything correctly
- Listen for unique information. Everything is important (ex. Is an input array sorted or unsorted?)
- Write down relevant information
- Get all the pieces ready for you to problem solve

#### Practice Time
- Take some time right now to perform practice steps 1-2 with the following problem
- “Write a function which takes two numbers and returns their sum.”
- Don't move forward until you have completed this practice

### 3. Use examples
Ask questions!
- Does the code need to compile?
- Should I assume valid input?
- Can I restate the problem in my own words?
- What are the inputs/outputs? (ex. Data types, error handling, etc.)
- How should I label the important pieces of data? (ex. Variable names)

#### Practice Time
- Take some time right now to perform practice step 3 with the following problem
- “Write a function which takes a string and returns the count of characters in the string.”
- Don't move forward until you have completed this practice

#### Possible Answers
- Questions to ask prior to creating examples:
    - What is considered a character? Do spaces count? Do punctuations count?
- Input: "How are you today?" -> Output: 15
- Input: "I'm good!" -> Output: 8

### 4. State a brute force solution
- Brute force solution: solves the problem, but not efficiently
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
You’re almost done!
- Is the result correct (including edge cases)?
- Can you derive the result differently?
- Is your code easy to understand at a glance?
- Can you improve the time/space complexity  (Big O)?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## Optimization Techniques
1. Look for BUD
2. DIY
3. Base case and build
4. Data structure brainstorm

### Look for Bud
Look for the following in your solution/brute force
- Bottlenecks
    - Your algorithm can’t be better than its worst Big O
- Unnecessary work
    - Extra processing that can be eliminated
- Duplicated work

### DIY
- Forget about the code
- How would you solve it manually?

### Base Case and Build
- What is a base case?
- Solve the problem for a base case
    - Helps you understand the problem in a simpler state
- Use the pattern you find to extrapolate
- Useful for recursive problems

### Data Structure Brainstorm
- Think through all the data structures you know
- Consider pros and cons of each one
- Benefits
    - Can help you get unstuck with a solution you didn’t previously think of 

## Patterns
While solving coding challenges there are often patterns that are common amongst problems. Know these common patterns and look for them in your technical interviews.
1. Frequency counter
2. Multiple pointers
3. Sliding window
4. Divide and conquer

### Frequency Counter
- Use objects/sets to collect value frequencies
- Avoids nested loops (O(N2) time complexity)

#### Practice Time
- Try solving the following problem using a frequency counter
- “Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.”
- Don't move forward until you have completed this practice

#### Practice Solution

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

#### Extra Frequency Counter Challenge
- “Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.”

### Multiple Pointers
- Create values/pointers to keep track of indices, and move them as needed until solution is found
- SumZero example

### Sliding Window
- Create a window to view data
- Move the window depending on certain conditions
- Useful for keeping track of data subset in string/array

### Divide and Conquer
- Divide data into smaller chunks, then repeat with smaller pieces of data
- Drastically reduces time complexity
- Ex. binary search, quicksort, merge sort

# Homework Assignment
- Recursion Assignment
- Find assignment under Class_03_Recursion_Problems -> Recursion_Homework -> Homework Description
