# Given an array nums of n integers where n > 1, return an array output such that output[i]
# is equal to the product of all the elements of nums except nums[i]
# Note: Please solve it without division
# This problem came from leetcode.com

input_array = [1, 2, 3, 4]
# Output = [24, 12, 8, 6]

def product_of_arrays_except_self(nums):
    product_nums = []
    for i in range(0, len(nums)):
        product = 1
        for j in range(0, len(nums)):
            if j != i:
                product = nums[j] * product

        product_nums.append(product)

    return product_nums

print(product_of_arrays_except_self(input_array))

# Multiply both sides of the array
def product_of_arrays_except_self_optimized(nums):
    if len(nums) == 0:
        return 1
    
    product_nums = [1]

    i = 1
    while i < len(nums):
        product_nums.append(product_nums[i - 1] * nums[i - 1])
        i += 1

    rightProduct = 1
    i = len(nums) - 1
    while i >= 0:
        product_nums[i] = product_nums[i] * rightProduct
        rightProduct *= nums[i]
        i -= 1

    return product_nums

print(product_of_arrays_except_self_optimized(input_array))
