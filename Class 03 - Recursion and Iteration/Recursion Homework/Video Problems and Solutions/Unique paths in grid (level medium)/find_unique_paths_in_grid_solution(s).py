# Write a function that takes two inputs n and m and outputs the number of unique paths from the top
# left corner to the bottom right corner of a n X m grid. 
# Constraints: you can only move down or right 1 unit at a time

def grid_paths(n, m):
    if n == 1 or m == 1:
        return 1
    else: 
        return grid_paths(n, m - 1) + grid_paths(n - 1, m)


# For additional help understanding this problem see the following link
# https://www.youtube.com/watch?v=ngCos392W4w