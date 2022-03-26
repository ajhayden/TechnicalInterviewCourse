# You are given an m x n integer grid accounts where accounts[i][j]
# is the amount of money the ith customer has in the jth bank.
# Return the wealth that the richest customer has.
# A customer's wealth is the amount of money they have in all their bank accounts. 
# The richest customer is the customer that has the maximum wealth.

input_accounts = [[2,8,7],[7,1,3],[1,9,5]]
# Output: 17

def richest_customer_wealth(accounts):
    richest_account = 0
    for account in accounts:
        current_account = 0
        for money in account:
            current_account += money
            if current_account > richest_account:
                richest_account = current_account
    return richest_account

print(richest_customer_wealth(input_accounts))
    