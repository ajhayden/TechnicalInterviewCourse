# Given an integer array nums, find the contiguous subarray within an array (containing at
# least one number) which has the largest product.
# This problem came from leetcode.com

input_array = [8, 2, -1, -2, -3, 2]
# output: 32

def maximum__product_subarray(nums):
    max_product_sum = 0
    for i in range(0, len(nums)):
        current_sum = nums[i]
        for j in range(i + 1, len(nums)):
            current_sum *= nums[j]
            if current_sum > max_product_sum:
                max_product_sum = current_sum

    return max_product_sum

print(maximum__product_subarray(input_array))

# Optimized version
def maximum_product_subarray_optimized(nums):
    if len(nums) == 0:
        return 0

    min_product =nums[0]
    max_product = nums[0]
    product_result = nums[0]

    i = 1
    while i < len(nums):
        temp_min = min(nums[i] * min_product, nums[i] * max_product)
        temp_max = max(nums[i] * max_product, nums[i] * min_product)

        min_product = min(temp_min, nums[i])
        max_product = max(temp_max, nums[i])

        product_result = max(product_result, max_product)
        i += 1
    
    return product_result

print(maximum_product_subarray_optimized(input_array))