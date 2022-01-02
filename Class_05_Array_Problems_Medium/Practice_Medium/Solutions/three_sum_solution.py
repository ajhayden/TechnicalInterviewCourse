# Given an array nums of n integers, are three elements a, b, c in nums such that a + b + c = 0?
# Find all unique triplets in the array which give the sum of zero
# Note: The solution set must not contain duplicate triplets
# This problem came from leetcode.com

input_array = [-1, 0, 1, 2, -1, -4, 4]
# a solution set is:
# [
#     [-1, 0, 1],
#     [-1, -1, 2]
# ]

# Time complexity is O(n^3), which is pretty bad.
def three_sum(nums):
    nums.sort()
    triplets_array = []

    for i in range(0, len(nums)):
        for j in range(i + 1, len(nums)):
            for k in range(j + 1, len(nums)):
                if nums[i] + nums[j] + nums[k] == 0:
                    triplet = [nums[i], nums[j], nums[k]]
                    if triplet not in triplets_array:
                        triplets_array.append(triplet)

    return triplets_array

print(three_sum(input_array))

# Optimized version. O(n), but it adds significantly more lines.
def three_sum_optimized(nums):
    nums.sort()
    triplets_array = []

    i = 0
    while i < len(nums):
        target = 0 - nums[i]
        left = i + 1
        right = len(nums) - 1
        while left < right:
            if nums[left] + nums[right] == target:
                triplet = [nums[i], nums[left], nums[right]]
                triplets_array.append(triplet)
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                right -= 1
                left -= 1
            elif nums[left] + nums[right] > target:
                right -= 1
            else:
                left += 1
        while i < len(nums) - 2 and nums[i] == nums[i + 1]:
            i += 1
        i += 1
    
    return triplets_array

print(three_sum_optimized(input_array))