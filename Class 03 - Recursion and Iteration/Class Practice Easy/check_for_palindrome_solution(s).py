# Write a function that checks if a string is a palindrome using recursion

def check_palindrome(string):
    if len(string) == 1 or len(string) == 0:
        return True

    if string[0] == string[len(string) - 1]:
        return check_palindrome(string[1:-1])

    return False

print(check_palindrome("racecar"))
print(check_palindrome("aaron"))
print(check_palindrome("Ilovepalindromes"))
print(check_palindrome("IlovepalindromessemordnilapevolI"))