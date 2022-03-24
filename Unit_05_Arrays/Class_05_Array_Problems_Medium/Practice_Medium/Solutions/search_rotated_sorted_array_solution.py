# Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
# You are given a target value to search. If found in the array return its index, otherwise return -1.
# You may assume no duplicates exist in the array
# This problem came from leetcode.com

# Try doing this problem with a runtime complexity that is close to O(log n)

input_array = [4, 5, 6, 7, 0, 1, 2]
target = 0
# Output = 4

# This is O(n) not O(log n)
def search_rotated_sorted_array(nums, target):
    for i in range(0, len(nums)):
        if nums[i] == target:
            return i
    return -1

print(search_rotated_sorted_array(input_array, target))

# This is O(log n), however this is significanlty more lines of code
def search_rotated_sorted_array_optimized(nums, target):
    if (len(nums) == 0):
        return -1

    low = 0
    high = len(nums) - 1

    while low < high:
        guess = (low + high) / 2
        if nums[guess] > nums[high]:
            low = guess + 1
        else:
            high = guess

    if nums[0] == target:
        return 0
    
    offset = low
    low = 0
    high = len(nums) - 1

    while low <= high:
        guess = (low + high) / 2
        adjusted_guess = (guess + offset) % len(nums)
        if nums[adjusted_guess] == target:
            return adjusted_guess
        elif nums[adjusted_guess] < target:
            low = guess + 1
        else:
            high = guess - 1

    return -1

print(search_rotated_sorted_array_optimized(input_array, target))

# Using python helper function. Probably would use this in production.
def search_rotated_sorted_array_optimized_two(nums, target):
    nums.index(target)

print(search_rotated_sorted_array_optimized(input_array, target))