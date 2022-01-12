# Write a function that finds the occurrence of a number in an array

input_array = [1, 2, 5, 3, 5, 5, 5, 7, 5 , 5, -5]
input_target = 5
# Ouptut = 6


def find_occurence_of_number(nums, target):
    occurrence_counter = 0
    i = 0
    while i < len(nums):
        if nums[i] == target:
            occurrence_counter += 1
        i += 1

    return occurrence_counter

print(find_occurence_of_number(input_array, input_target))
