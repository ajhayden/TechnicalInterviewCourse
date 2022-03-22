# Search an array of numbers to find a target number using binary search.
# The function should return the index of the target number if the target number is found
# or a -1 if the target is not found in the array

input_array = [1, 2, 5, 9, 12, 15, 21, 28, 99, 100, 117]
input_target = 5
# Output = 2

def binary_search(nums, target):
    lower_bound = 0
    upper_bound = len(nums) - 1

    while lower_bound <= upper_bound:
        mid_point = (upper_bound + lower_bound) / 2

        if nums[mid_point] == target:
            return mid_point
        else:
            if nums[mid_point] < target:
                lower_bound = mid_point + 1
            else:
                upper_bound = mid_point - 1
    return -1
        
print(binary_search(input_array, input_target))