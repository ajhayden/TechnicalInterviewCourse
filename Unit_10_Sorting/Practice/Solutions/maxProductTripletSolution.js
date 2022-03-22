/* 
Given an integer array, give the maximum product of a triplet in an array.

Examples:
Input = [10, 3, 5, 6, 20]
Output = 1200 (product of 10, 6, and 20)

Input:  [-10, -3, -5, -6, -20]
Output: -90

Input:  [1, -4, 3, -6, 7, 0]
Output: 168

Source: https://www.geeksforgeeks.org/find-maximum-product-of-a-triplet-in-array/
*/

let factors = [10, 3, 5, 6, 20] // 1200

// Naive solution - triple for loop to manually calculate all possible products
// Time complexity: O(n^3)
// Space complexity: O(1)
    // We create the same amount of variables regardless of input size
function maxProductNaive(arr) {
    if (arr.length < 3) {
        return -1
    }

    let maxProduct = Number.MIN_VALUE

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let product = arr[i] * arr[j] * arr[k]
                if (product > maxProduct) {
                    maxProduct = product
                }
            }
        }
    }

    return maxProduct
}

console.log("Naive solution: ", maxProductNaive(factors))

// Better solution: use merge sort to order array, select max numbers
// Time complexity: O(nlog(n))
// Space complexity: O(n)
    // Our sorted array will grow to match the size of the input array
function maxProductMergeSort(factors) {
    // sort array
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

    if (factors.length < 3) return -1

    const sorted = mergeSort(factors)

    // pull 3 top numbers and 2/1 split
    let n = sorted.length
    let maxFactors = sorted[n - 1] * sorted[n - 2] * sorted[n - 3]
    let minMaxFactors = sorted[0] * sorted[1] * sorted[n - 1]

    // return max
    return Math.max(maxFactors, minMaxFactors)
}

console.log("Using merge sort: ", maxProductMergeSort(factors))

// Better solution: use variables to track min/max values
// Time complexity: O(n)
// Space complexity: O(1)
    // We create the same amount of variables regardless of input size
    // Each variable is the same size (holds a single number value) regardless of input size
function maxProductTrackVals(factors) {
    if (factors.length < 3) return -1

    // create holding vars for max and min vars
    let max1 = Number.MIN_VALUE
    let max2 = Number.MIN_VALUE
    let max3 = Number.MIN_VALUE
    let min1 = Number.MAX_VALUE
    let min2 = Number.MAX_VALUE

    // scan through array once
    // update variables as needed
    for (const num of factors) {
        if (num > max1) {
            max3 = max2
            max2 = max1
            max1 = num
        } else if (num > max2) {
            max3 = max2
            max2 = num
        } else if (num > max3) {
            max3 = num
        }
        
        if (num < min1) {
            min2 = min1
            min1 = num
        } else if (num < min2) {
            min2 = num
        }
    }

    // compute potential max products
    let maxFactors = max1 * max2 * max3
    let minMaxFactors = max1 * min1 * min2

    // return max product
    return Math.max(maxFactors, minMaxFactors)
}

console.log("Using pointers: ", maxProductTrackVals(factors))
