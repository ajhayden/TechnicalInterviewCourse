# Write a recursive problem that given an input n sums all nonnegative integers up to n

def sum(n):
    if n == 0:
        return 0
    else: 
        return n + sum(n-1)

print(sum(4))


# For additional help understanding this problem see the following link
# https://www.youtube.com/watch?v=ngCos392W4w