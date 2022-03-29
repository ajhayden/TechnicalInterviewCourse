# Write a function that calculates the power of a number given a base number and exponent using recursion

def power(base, exponent):
    if exponent == 0:
        return 1
    else:
        return base * power(base, exponent - 1)

print(power(2, 4))