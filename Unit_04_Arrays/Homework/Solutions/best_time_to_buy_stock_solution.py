# Say you have an array for which the ith element is the price of a given stock on day i
# If you were only permitted to complete at most one transaction (i.e, buy one and 
# sell one share of the stock) design an algorithm to find the maximum profit
# This problem came from leetcode.com

input_array = [7, 1, 5, 3, 6, 4]
# Output = 5

def best_time_to_buy_stock(nums):
    best_profit = 0
    
    for i in range(0, len(nums)):
        for j in range(i + 1, len(nums)):
            check_profit = nums[j] - nums[i]
            if check_profit > best_profit:
                best_profit = check_profit
    return best_profit

print(best_time_to_buy_stock(input_array))

# Optimized version that only uses one for loop
def best_time_to_buy_stock_optimized(prices):
    if len(prices) == 0:
        return 0
    
    minSoFar = prices[0]
    maxProfit = 0
    for i in range(0, len(prices)):
        if prices[i] < minSoFar:
            minSoFar = prices[i]
        if prices[i] - minSoFar > maxProfit:
            maxProfit = prices[i] - minSoFar

    return maxProfit

print(best_time_to_buy_stock_optimized(input_array))