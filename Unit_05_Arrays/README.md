# Unit 5 - Arrays

[Array Problems (Easy) Slides](https://docs.google.com/presentation/d/1PX6IedLeZXRy1QNNnM5vgS9TZzgURxpkFh1OCNCcS10/edit?usp=sharing)

[Array Problems (Medium) Slides](https://docs.google.com/presentation/d/1vWUZeqUQrarVPHtB2SFqsVy2yUVABQEwGlFCpygY79w/edit?usp=sharing)

## Understanding Arrays
- Contiguous memory
- Some details are language dependent
    - Name (aka lists in some languages)
    - Fixed vs. flexible size
    - Resizing factor

## Data Structures Big O Breakdown

| | Access | Search | Insertion | Deletion |
| --- | --- | --- | --- | --- |
| Array | O(1) | O(N) | O(N) | O(N) |
| Dictionary/Hash Table | O(1) | O(N) | O(1) | O(1) |
| Linked List | O(N) | O(N) | O(1) | O(1) |
| Binary Tree | O(log(N)) | O(log(N)) | O(log(N)) | O((log(N)) |

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

### Array Problems

#### Easy Level
- Problem 1: Write a function that finds the minimum and maximum in an array 
- Problem 2: Write a function that reverses an array in place
- Problem 3: Write a function that finds the missing number in an array
- Problem 4: Write a function that moves all negative elements to the end of an array
- Problem 5: You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
    - input_accounts = [[2,8,7],[7,1,3],[1,9,5]]
    - output = 17
- Problem 6: Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
    - input_array = [2, 5, 6, 3, 9]
    - input_target = 9
    - output = [2, 3]
- Problem 7: Write a function that finds the occurrence of a number in an array
- Problem 8: Write a function that finds common elements in three sorted arrays
- Problem 9: Write a function that sorts 0s, 1s, and 2s
- Problem 10: Write a function that sorts a given array of numbers

#### Medium Level
- Problem 11: Write a program that uses binary search to find a given target number. The function should return the index of the target number if found
- Problem 12: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum number in the sorted array. You may assume no duplicate exists in the array.
    - input_array = [3, 4, 5, 6, 1, 2]
    - output = 1
    - Hint: use binary search
- Problem 13: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the maximum number in the sorted array. You may assume no duplicate exists in the array.
    - input_array = [3, 4, 5, 6, 1, 2]
    - output = 6
    - Hint: use binary search
- Problem 14: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    - input_array = [-2, 1, -3, 4, -1, 2, 10, 1, -5, 4]
    - output = 16
- Problem 15: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    - input_array = [8, 2, -1, -2, -3, 2]
    - output = 32
- Problem 16: Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
    - Note: Please solve it without division
    - input_array = [1, 2, 3, 4]
    - output = [24, 12, 8, 6]

*An empty file to write code for these problems can be found under Unit_05_Arrays -> Practice -> Problems. Additionally, solutions for each problem can be found under Unit_05_Arrays -> Practice -> Solutions.*

# Homework Assignment
- Dictionary Assignment
- Find assignment under Unit_06_Dictionaries -> Homework -> README.md
