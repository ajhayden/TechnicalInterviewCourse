// helper function: merges two sorted sub-arrays into one sorted array
function merge(arr1, arr2) {
    // create holding array to combine values
    let arrFinal = []
    let i = 0
    let j = 0

    // compare arrays element by element, add to arrFinal in order
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] >= arr1[i]) {
            arrFinal.push(arr1[i])
            i++
        }
        else {
            arrFinal.push(arr2[j])
            j++
        }
    }

    // after one array is out of elements
    // add the rest of the other array's elements to arrFinal (they're already sorted)
    while (i < arr1.length) {
        arrFinal.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        arrFinal.push(arr2[j])
        j++
    }

    return arrFinal
}

// main function
function mergeSort(arr) {
    // recursive base case
    if (arr.length <= 1) return arr;

    // divide the array in half (divide and conquer approach)
    // recursively split array halves into single elements
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const input1 = [45, 98, 3, 24, 15, 77, 9, 50] // [3, 9, 15, 24, 45, 50, 77, 98]
const input2 = [18, 16, 27, 4, 12] // [4, 12, 16, 18, 27]

console.log(mergeSort(input1))
console.log(mergeSort(input2))