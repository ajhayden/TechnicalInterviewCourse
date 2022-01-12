# Write a function that finds the missing number in an array

input_array = [1, 2, 3, 4, 6, 7]
# Output = 5

def find_missing_number(nums):
    counter = 0
    counter_to_compare = 1

    while counter < len(nums):
        if nums[counter] != counter_to_compare:
            return counter_to_compare
        counter_to_compare += 1
        counter += 1

print(find_missing_number(input_array))