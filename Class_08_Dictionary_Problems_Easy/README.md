# Class 8 - Dictionary Problems (Easy)

## Data Structures Big O Breakdown

| | Access | Search | Insertion | Deletion |
| --- | --- | --- | --- | --- |
| Array | O(1) | O(N) | O(N) | O(N) |
| Dictionary/Hash Table | O(1) | O(N) | O(1) | O(1) |
| Linked List | O(N) | O(N) | O(1) | O(1) |
| Binary Tree | O(log(N)) | O(log(N)) | O(log(N)) | O((log(N)) |

## More on Hash Tables
- Store key/value pairs
- Commonly used because of their speed
- When to use
    - “Map values”
    - Keeping track of counts
    - Tracking differences between arrays and strings

## Frequency Counter
- Use objects/sets to collect value frequencies
- Avoids nested loops (O(N2) time complexity)

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

### Dictionary Problems (Easy)
Problem 1
- Given an array nums of size n, return the majority element. The majority element is an element that appears more than [n/2] times.

`Input = [3, 2, 3]`
`Output = 3`

`Input = [2, 2, 1, 1, 1, 2, 2]`
`Output = 2`

Problem 2
- Given an array nums and an integer target, return the indices of the two numbers such that they add up to target.
- You may assume that each input would have exactly one solution, and you may not use the same element twice.
- You can return the answer in any order.

Input: `nums = [2, 7, 11, 15]`, `target = 9`
Output: `[0, 1]` (because `nums[0] + nums[1]  == 9`)

Problem 3
- Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
- A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Input: `s1 = “this apple is sweet”`, `s2 = “this apple is sour”`
Output: `[“sweet”, “sour”]`
Input: `s1 = “apple apple”`, `s2 = “banana”`
Output: `[“banana”]`

Problem 4
- Given a Roman numeral, convert it to an integer.

`Input = “III”`
`Output = 3`

`Input = “LVIII”`
`Output = 58`

`Input = “MCMXCIV”`
`Output = 1994`

| Symbol | Value |
| --- | --- |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Problem 5
- Given two strings s and t, determine if they are isomorphic.
- s and t are isomorphic if the characters in s can be replaced to get t.
- All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Input: `s = ‘egg’`, `t = ‘add’ // true`
Input: `s = ‘foo’`, `t = ‘bar’ // false`
Input: `s = ‘paper’`, `t = ‘title’ // true`
		
*An empty file to write code for these problems can be found under Class_05_Array_Problems_Medium -> Practice_Medium -> Problems. Additionally, solutions for each problem can be found under Class_05_Array_Problems_Medium -> Practice_Medium -> Solutions.*

# Homework Assignment
- Dictionary Problems Easy Assignment
- Find assignment under Class_08_Dictionary_Problems_Easy -> Homework -> README.md

*An empty file to write code for these problems can be found under Class_08_Dictionary_Problems_Easy -> Practice -> Problems. Additionally, solutions for each problem can be found under Class_08_Dictionary_Problems_Easy -> Practice -> Solutions.*

# Homework Assignment
- Frontend Interviews Assignment
- Find assignment under Class_06_Frontend_Interviews -> Homework -> README.md