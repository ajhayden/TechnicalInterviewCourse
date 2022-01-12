# Write a function that finds the minimum and maximum in an array 

input_array = [1, 2, 7, 9, -11, 10, 20, 1037]
# Output = -11, 1037

def min_and_max(nums):
    min_num = nums[0]
    max_num = nums[0]

    for i in range(0, len(nums)):
        if nums[i] <= min_num:
            min_num = nums[i]
        if nums[i] >= max_num:
            max_num = nums[i]

    return min_num, max_num

print(min_and_max(input_array))