# Write a function that reverses a string using recursion

def reverse_string(string):

    if string == "":
        return ""
    
    return reverse_string(string[1:]) + string[0]

print(reverse_string("bacon"))