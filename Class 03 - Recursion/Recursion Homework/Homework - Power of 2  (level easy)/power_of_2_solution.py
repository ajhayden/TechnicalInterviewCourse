# Given an integer n, return True if it is a power of 2. 
# An integer n is a power of two, if there exists an integer x such that n == 2^x


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