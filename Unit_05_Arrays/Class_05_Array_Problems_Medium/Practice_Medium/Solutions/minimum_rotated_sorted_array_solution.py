# Suppose an array sorted in ascending order is rotated at some pivot unknown
# to you beforehand. Find the minumum number in the sorted array. You may assume no duplicate exists in the array.
# This problem came from leetcode.com

input_array = [3, 4, 5, 6, 1, 2]
# Output = 1

def minimum_rotated_sorted_array(nums):
    minimum_result = nums[0]
    i = 0
    while i < len(nums):
        if nums[i] < minimum_result:
            minimum_result = nums[i]
        i += 1
    
    return minimum_result

print(minimum_rotated_sorted_array(input_array))

# Optimized version
def minimum_rotated_sorted_array_optimized(nums):
    low = 0
    high = len(nums) - 1

    while low < high:
        guess = (low + high) / 2
        if nums[guess] > nums[high]:
            low = guess + 1
        else:
            high = guess

    return nums[low]

print(minimum_rotated_sorted_array_optimized(input_array))