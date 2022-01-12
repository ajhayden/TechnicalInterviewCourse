# Write a function that sorts 0s, 1s, and 2s

input_array = [0, 1, 2, 0, 2, 2, 1, 1, 0]
# Output = [0, 0, 0, 1, 1, 1, 2, 2, 2]

def sort_0_1_2s_additional(nums):
    low = 0
    high = len(nums) - 1
    middle = 0
    while middle <= high:
        if nums[middle] == 0:
            nums[low], nums[middle] = nums[middle], nums[low]
            low = low + 1
            middle = middle + 1
        elif nums[middle] == 1:
            middle = middle + 1
        else:
            nums[middle], nums[high] = nums[high], nums[middle]
            high = high - 1
    return nums

print(sort_0_1_2s_additional(input_array))

input_array = [0, 1, 2, 0, 2, 2, 1, 1, 0]

def sort_0_1_2s_simple(nums):
    nums.sort()
    return nums

print(sort_0_1_2s_simple(input_array))