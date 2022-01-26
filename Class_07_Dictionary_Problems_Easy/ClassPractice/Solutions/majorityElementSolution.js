/*
Given an array nums of size n, return the majority element. 
The majority element is an element that appears more than [n/2] times. 
You may assume that the majority element always exists in the array.

Input = [3, 2, 3]
Output = 3

Input = [2, 2, 1, 1, 1, 2, 2]
Output = 2

Source: https://leetcode.com/problems/majority-element/
*/

const arr1 = [3, 2, 3] // 3
const arr2 = [2, 2, 1, 1, 1, 2, 2] // 2

// Time complexity:
// Space complexity:
function majority(arr) {
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        map[num] = (map[num] || 0) + 1
        if (map[num] > arr.length / 2) return num
    }
}

console.log(majority(arr1))
console.log(majority(arr2))