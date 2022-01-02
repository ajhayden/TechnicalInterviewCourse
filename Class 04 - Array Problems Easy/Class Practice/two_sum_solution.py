# Given an array of integers, return indices of the two numbers such that they add up to a specific target
# You may assume that each input would have exactly one solution, and you may not use the same element twice
# This problem came from leetcode.com

input_array = [2, 5, 6, 3, 9] 
input_target = 9
# Output = [2, 3]

def two_sum(arr, target):
    for i in range(0, len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]

print(two_sum(input_array, input_target))

# This is a more optimized version with O(n)
def two_sum_with_dictionary(nums, target):
    num_dict = {}

    for i in range(0, len(nums)):
        temp = target - nums[i]
        if temp in num_dict.keys():
            return [num_dict[temp], i]
        num_dict[nums[i]] = i

    return [0]

print(two_sum_with_dictionary(input_array, input_target))


