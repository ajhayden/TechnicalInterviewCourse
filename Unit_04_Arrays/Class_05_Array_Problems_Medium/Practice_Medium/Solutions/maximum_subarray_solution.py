# Given an integer array nums, find the contiguous subarray (containing at least
# one number) which has the largest sum and return its sum.
# This problem came from leetcode.com

input_array = [-2, 1, -3, 4, -1, 2, 1, -5, 4, 10]
# Output 6

def maximum_subarray(nums):
    max_sum = 0
    for i in range(0, len(nums)):
        current_sum = nums[i]
        for j in range(i + 1, len(nums)):
            current_sum += nums[j]
            if current_sum > max_sum:
                max_sum = current_sum

    return max_sum

print(maximum_subarray(input_array))

# Optimized version
def maximum_subarray_optimized(nums):
    if len(nums) == 0:
        return 0

    tempSum =nums[0]
    maxSum = nums[0]

    i = 1
    while i < len(nums):
        tempSum = max(tempSum + nums[i], nums[i])
        maxSum = max(tempSum, maxSum)
        i += 1
    
    return maxSum

print(maximum_subarray_optimized(input_array))