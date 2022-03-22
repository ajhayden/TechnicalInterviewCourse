# Given an integer n, return True if it is a power of 2. 
# An integer n is a power of two, if there exists an integer x such that n == 2^x

# Examples:

# Input: n = 4
# Output: True
# 2^2 = 4

# Input : n = 16
# Output : True
# 2^4 = 16

# Input : n = 13
# Output : False

def power_of_2(n):
    if n == 1 or n == 2:
        return True
    elif n < 2: 
        return False
    else:
        return power_of_2(n / 2)


def another_power_of_2_example(n):
    n = n/2
    if n == 2:
        return True
    elif n > 2:
        return another_power_of_2_example(n)
    else:
        return False