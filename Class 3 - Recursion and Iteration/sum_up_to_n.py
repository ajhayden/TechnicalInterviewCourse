# Write a recursive problem that given an input n sums all nonnegative integers up to n

def sum(n):
    if n == 0:
        return 0
    else: 
        return n + sum(n-1)

print(sum(4))