# Write a function that moves all negative elements to the end of an array

input_array = [-1, 2, -3, 4, 5, 7]
# Output = [2, 4, 5, 7, -3, -1]

def move_negative_element_to_end(nums):
    i = 0
    length = len(nums)
    while i < length:
        if nums[i] < 0:
            negative = nums.pop(i)
            nums.append(negative)
        i += 1

    return nums

print(move_negative_element_to_end(input_array))
