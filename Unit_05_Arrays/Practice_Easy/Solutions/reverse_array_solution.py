# Write a function that reverses an array

input_array = [1, 2, 3, 4, 5, 6, 7, "a"]
# Output = ["a", 7, 6, 5, 4, 3, 2, 1]

def reverse_array_2(arr):
    i = 0
    length = len(arr)
    while i < length:
        char = arr.pop()
        arr.insert(i, char)
        i += 1
    return arr

print(reverse_array_2(input_array))

input_array = [1, 2, 3, 4, 5, 6, 7, "a"]
# Output = ["a", 7, 6, 5, 4, 3, 2, 1]

def reverse_array(arr):
    arr.reverse()
    return arr

print(reverse_array(input_array))

