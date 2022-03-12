/**
 * 
 * Given an integer array nums, are there elements a, b, and c in nums such that a + b + c = 0? 
 * Find all unique triplets in the array which give the sum of zero.

 * Input = [-1, 0, 1, 2, -1, 4]
 * Output = [[-1, 0, 1], [-1, -1, 2]]

 * Input = [0]
 * Output = []
 * 
 * Source: https://leetcode.com/problems/3sum/description/
 * Solution walkthrough: https://fizzbuzzed.com/top-interview-questions-1/
*/

const arr1 = [-1, 0, 1, 2, -1, 4]
const arr2 = [0]

// brute force: 3 nested for loops

// merge sort code is outside of our main function
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

// Sort and use pointers
// Time complexity: O(n^2)
function threeSum(nums) {
    // declare output array
    let result = []

    // sort array
    nums = mergeSort(nums)

    // keep track with pointers
    // iterate through array, record triplets
    for (let i = 0; i < nums.length; i++) {
        // keep triplets distinct
        if (i !== 0 && nums[i] === nums[i - 1]) continue // TODO: check this
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]])
                j++
                // avoid duplicates: j can never refer to the same value twice
                while (j < k && nums[j] == nums[j-1]) {
                    j++
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++
            } else {
                k--
            }
        }
    }

    return result
}

console.log(threeSum(arr1)) // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum(arr2)) // []