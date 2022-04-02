# Unit 6 - Dictionaries

[Dictionary Problems (Easy) Slides](https://docs.google.com/presentation/d/1N3SCnSvPXMNTwi5uBi6LAAZnbkCdNLFOPL5k9Cpmb5M/edit?usp=sharing)

[Dictionary Problems (Medium) Slides](https://docs.google.com/presentation/d/16dELSSybPUuIt23023xl9Zjt340BntvApVPdf0S1WdE/edit?usp=sharing)

## Data Structures Big O Breakdown

| | Access | Search | Insertion | Deletion |
| --- | --- | --- | --- | --- |
| Array | O(1) | O(N) | O(N) | O(N) |
| Dictionary/Hash Table | O(1) | O(N) | O(1) | O(1) |
| Linked List | O(N) | O(N) | O(1) | O(1) |
| Binary Tree | O(log(N)) | O(log(N)) | O(log(N)) | O((log(N)) |

## More on Hash Tables
- Store key/value pairs
- Commonly used because of their speed (note the constant Big O for access, insertion, and deletion)
- When to use
    - When the words "map values" are in a prompt
    - Keeping track of counts
    - Tracking differences between arrays and strings

## When to use dictionaries?
- When order doesn’t matter
- Key and value
- When values might change
- When we have a unique reference with value
- No duplicates
- Quick access is needed
- When memory is available

## Frequency Counter
- Common way to use dictionaries to solve problems
- Use objects/sets to collect value frequencies
- Why you should use it: avoids nested loops (O(N2) time complexity)

### Practice Time
- Try solving the following problem using a frequency counter
    - “Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.”
- Don't move forward until you have completed this practice

### Practice Solution

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

## Dictionary Problems
- Problem 1: Given an array nums of size n, return the majority element. The majority element is an element that appears more than [n/2] times.
    - Input = [3, 2, 3]
    - Output = 3

    - Input = [2, 2, 1, 1, 1, 2, 2]
    - Output = 2

- Problem 2: Given an array nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
    - Input: nums = [2, 7, 11, 15], target = 9
    - Output: [0, 1] (because nums[0] + nums[1]  == 9)

- Problem 3: Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order. A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
    - Input: s1 = “this apple is sweet”, s2 = “this apple is sour”
    - Output: [“sweet”, “sour”]

    - Input: s1 = “apple apple”, s2 = “banana”
    - Output: [“banana”]

- Problem 4: Given a Roman numeral, convert it to an integer.
    - Input = “III”
    - Output = 3

    - Input = “LVIII”
    - Output = 58

    - Input = “MCMXCIV”
    - Output = 1994

    | Symbol | Value |
    | --- | --- |
    | I | 1 |
    | V | 5 |
    | X | 10 |
    | L | 50 |
    | C | 100 |
    | D | 500 |
    | M | 1000 |

- Problem 5: Given two strings s and t, determine if they are isomorphic. s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
    - Input: s = ‘egg’, t = ‘add’ // true
    - Input: s = ‘foo’, t = ‘bar’ // false
    - Input: s = ‘paper’, t = ‘title’ // true

### Additional Dictionary Problems
- Problem 1: Write a program to reverse dictionary keys order
- Problem 2: Write a program to sort nested keys by value
- Problem 3: Write a program to remove duplicate values across dictionary values
		
*An empty file to write code for these problems can be found under Unit_06_Dictionaries -> Practice -> Problems. Additionally, solutions for each problem can be found under Unit_06_Dictionaries -> Practice -> Solutions.*

# Homework Assignment
- Linked List Assignment
- Find assignment under Unit_07_Linked_Lists -> Homework -> README.md
