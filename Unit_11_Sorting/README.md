# Unit 11 - Sorting

[QuickSort Slides](https://docs.google.com/presentation/d/1XHYuX-uzZd8BrUB2DWHT7H1X1lAN4I8nYsdF1C9NPmM/edit?usp=sharing)

[Merge Sort Slides](https://docs.google.com/presentation/d/1HRDWzBykxUXynxpuM19Ggt0THNdSl7XJiRmnkbRl6e4/edit?usp=sharing)

## QuickSort

### QuickSort on Paper
- Walk through the following array of how QuickSort works
    - [2, 6, 5, 3, 8, 7, 1, 0]

### Code a QuickSort
- Write a QuickSort function with an accompanying partition function
    - Test your code with examples

### Walk through Code
- Using a piece of paper or the following website walkthrough your code using an example array
    - https://pythontutor.com

### Merge Sort Details
- Big O
    - Time complexity: O(nlogn)
    - Space complexity: O(n)
    - Much better than bubble, insertion, and selection sorts
- Pros
    - Fast
    - Parallelizable: chunks can be sorted at the same time in parallel
    - Sorts in sequential order, not random access: good for linked lists
- Cons
    - Requires memory space of O(n) for temporary array
    - Goes through entire process, even if array is sorted

### Merge Sort Problems
- Problem 1: Given an array nums of size n, return the majority element. The majority element is an element that appears more than [n/2] times.
    - Input = [3, 2, 3]
    - Output = 3
    
    - Input = [2, 2, 1, 1, 1, 2, 2]
    - Output = 2
- Problem 2: Given an integer array, give the maximum product of a triplet in an array.
    - Input = [10, 3, 5, 6, 20]
    - Output = 1200 (product of 10, 6, and 20)
- Problem 3: Given an integer array nums, are there elements a, b, and c in nums such that a + b + c = 0? Find all unique triplets in the array which give the sum of zero.
    - Input = [-1, 0, 1, 2, -1, 4]
    - Output = [[-1, 0, 1], [-1, -1, 2]]

    - Input = [0]
    - Output = []

- Problem 4: Given an array of integers, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
    - Input = [[1, 2], [2, 3], [3, 4], [1, 3]]
    - Output = 1
    - [1, 3] can be removed and the rest of the intervals are non-overlapping

    - Input = [[1, 2], [1, 2], [1, 2]]
    - Output = 2
    - Two [1, 2] intervals must be removed to make the rest of the intervals non-overlapping

*An empty file to write code for these problems can be found under Unit_11_Sorting -> Practice -> Problems. Additionally, solutions for each problem can be found under Unit_11_Sorting -> Practice -> Solutions.*

# Homework Assignment
- Backend Interview Assignment
- Find assignment under Unit_12_Backend_Interviews -> Homework -> README.md
