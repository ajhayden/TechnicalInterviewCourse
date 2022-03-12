/**
Given an array of integers, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Input = [[1, 2], [2, 3], [3, 4], [1, 3]]
Output = 1
[1, 3] can be removed and the rest of the intervals are non-overlapping.

Input = [[1, 2], [1, 2], [1, 2]]
Output = 2
Two [1, 2] intervals must be removed to make the rest of the intervals non-overlapping.

Input = [[1, 2], [2, 3]]
Output = 0
None of the input intervals are overlapping, so you don't need to remove any.

Source: https://leetcode.com/problems/non-overlapping-intervals/
Solution walkthrough: https://medium.com/swlh/non-overlapping-intervals-f0bce2dfc617
*/

const intervals1 = [[1, 2], [2, 3], [3, 4], [1, 3]]
const intervals2 = [[1, 2], [1, 2], [1, 2]]
const intervals3 = [[2, 3], [1, 2]]

// Time complexity: O(nlog(n))
    // sorting algorithm is the dominant process
// Space complexity: O(n)
    // because of merge sort algorithm
    // if an in-place sort is used, space is O(1)
function intervals(arr) {
    // sort array based on interval start
    arr = modifiedMergeSort(arr)

    let removeCount = 0
    let j = 0

    // iterate through array
    for (let i = 1; i < arr.length; i++) {
        // pointers
        let nextStart = arr[i][0] 
        let nextEnd = arr[i][1]
        let currentEnd = arr[j][1]
        
        // if next interval starts before current end
        if (nextStart < currentEnd) {
            removeCount += 1
            // move current interval to the next interval
            if (nextEnd < currentEnd) {
                j = i
            }
        } else { 
            // else, move current interval to the next interval
            j = i
        }
    }

    return removeCount
}

function modifiedMergeSort(arr) {
    if (arr.length <= 1) return arr

    let middle = Math.floor(arr.length / 2)
    let left = modifiedMergeSort(arr.slice(0, middle))
    let right = modifiedMergeSort(arr.slice(middle))

    return merge(left, right)
}

function merge(left, right) {
    let sorted = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        // modified to sort interval arrays
        if (left[i][0] <= right[j][0]) {
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

console.log(intervals(intervals1)) // 1
console.log(intervals(intervals2)) // 2
console.log(intervals(intervals3)) // 0