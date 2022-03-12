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

// Sorting
    // sort array to get identical elements together
    // if element is always at least half the array size, the majority element will always be in the center
// Time complexity: O(nlog(n))
    // Because we're using the merge sort algorithm
// Space complexity: O(n)
    // Merge sort requires a holding array equal to the size of the input array (so the holding array grows with input size)
function majorityElement(arr) {
    // sort element using merge sort
    function mergeSort(arr) {
        if (arr.length <= 1) return arr

        let middle = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, middle))
        let right = mergeSort(arr.slice(middle))

        return merge(left, right)
    }

    function merge(left, right) {
        let sorted = []
        let i = 0
        let j = 0

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                sorted.push(left[i])
                i++
            } else {
                sorted.push(right[j])
                j++
            }
        }

        while (i < left.length) {
            sorted.push(left[i])
            i++
        }

        while (j < right.length) {
            sorted.push(right[j])
            j++
        }

        return sorted
    }

    arr = mergeSort(arr)

    // find middle element
    const mid = arr[Math.floor(arr.length / 2)]

    // return element
    return mid
}

console.log(majorityElement(arr1))
console.log(majorityElement(arr2))