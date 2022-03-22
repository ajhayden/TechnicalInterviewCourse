# You are given a string s and an integer array indices of the same length. 
# The string s will be shuffled such that the character at the ith position 
# moves to indices[i] in the shuffled string. Return the shuffled string.

# Input: s = "codeleet", indices = [4,5,6,7,0,1,2,3]
# Output: "leetcode"

input_string = "ttbdisschoeee"
indices = [7, 9, 3, 10, 4, 5, 0, 8, 11, 2, 12, 6, 1]


def shuffle_string(string, indices):
    new_string = ""
    for i in range(0, len(indices)):
        new_string += string[indices[i]]
    return new_string

print(shuffle_string(input_string, indices))
