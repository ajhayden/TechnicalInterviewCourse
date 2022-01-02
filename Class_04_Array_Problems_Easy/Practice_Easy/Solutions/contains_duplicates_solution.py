# Given an array of integers, find if the array contains any duplicates
# Your function should return false if every element is distinct.
# This problem came from leetcode.com

input_array = [1, 2, 3, 3, 4]
# Output = True

def contains_duplicates(arr):
    for i in range(0, len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] == arr[j]:
                return True

    return False

print(contains_duplicates(input_array))

# More optimized with O(n)
def contains_duplicates_2(arr):
    numsSet = []
    for i in range(0, len(arr)):
        if arr[i] in numsSet:
            return True
        numsSet.append(arr[i])
    
    return False

print(contains_duplicates_2(input_array))