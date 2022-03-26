# Write a function that sorts a given array of numbers

input_array = [1, -3, 6, 89, 5, 24, 10, -2]
# Output = [-3, -2, 1, 5, 6, 10, 24, 89]

def simple_sort(nums):
    nums.sort()
    return nums

print(simple_sort(input_array))

input_array = [1, -3, 6, 89, 5, 24, 10, -2]
# Output = [-3, -2, 1, 5, 6, 10, 24, 89]

def bubble_sort(nums):
    for i in range(len(nums)-1):
        for j in range(0, len(nums)-i-1):
            if nums[j] > nums[j + 1]:
                temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
    return nums

print(bubble_sort(input_array))