# Write a function that finds common elements in three sorted arrays

input_array_1 = [1, 5, 10, 20, 40, 80]
input_array_2 = [6, 7, 20, 80, 100]
input_array_3 = [3, 4, 15, 20, 30, 70, 80, 120]
# Output = 20, 80

def find_common_element_three_array(nums_1, nums_2, nums_3):
    initial_common_nums = []
    complete_common_nums = []
    i = 0
    while i < len(nums_1):
        if nums_1[i] in nums_2:
            initial_common_nums.append(nums_1[i])
        i += 1

    i = 0
    while i < len(nums_3):
        if nums_3[i] in initial_common_nums:
            complete_common_nums.append(nums_3[i])
        i += 1

    return complete_common_nums

print(find_common_element_three_array(input_array_1, input_array_2, input_array_3))

    