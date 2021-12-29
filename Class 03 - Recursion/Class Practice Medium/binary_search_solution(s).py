# Write a binary search that utilizes recursion

# Needs to be sorted already
# A = array of numbers
# left = starting index
# right = ending index
# x = length of array

def binarySearch(A, left, right, x):
    if (left > right):
        return -1

    mid = (left + right) / 2

    if x == A[mid]:
        return mid

    if x < A[mid]:
        return binarySearch(A, left, mid - 1, x)

    return binarySearch(A, mid + 1, right, x)

print(binarySearch([-1, 0, 1, 2, 3, 4, 7, 9, 10, 20], 0, 9, 10))