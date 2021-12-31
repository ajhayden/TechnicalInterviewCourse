# Given an array of integers, return indices of the two numbers such that they add up to a specific target
# You may assume that each input would have exactly one solution, and you may not use the same element twice
# This problem came from leetcode.com

def two_sum(arr, target):
    for i in range(0, len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]

input_array = [2, 5, 6, 3, 9] 
target1 = 9
print(two_sum(input_array, target1))

# This is a more optimized version with O(n)
def two_sum_with_dictionary(nums, target):
    num_dict = {}

    for i in range(0, len(nums)):
        temp = target - nums[i]
        if temp in num_dict.keys():
            return [num_dict[temp], i]
        num_dict[nums[i]] = i

    return [0]

nums = [2, 5, 6, 3, 9] 
target2 = 9
print(two_sum_with_dictionary(nums, target2))


