# Write a program that creates a portion of the fibonacci sequence recursively

def find_fibonacci_sequence(n):
    if n == 0 or n == 1:
        return n
    else: 
        return find_fibonacci_sequence(n - 1) + find_fibonacci_sequence(n - 2)

print(find_fibonacci_sequence(6))