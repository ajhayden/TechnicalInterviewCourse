# Given two strings s and t, determine if they are isomorphic.
# s and t are isomorphic if the characters in s can be replaced to get t.
# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

# Source: https://leetcode.com/problems/isomorphic-strings/solution/

s1 = 'egg'
t1 = 'add'
s2 = 'foo'
t2 = 'bar'
s3 = 'paper'
t3 = 'title'

def isIsomorphic(s, t):
    mapping_s_t = {}
    mapping_t_s = {}

    for i in range (len(s)):
        if s[i] in mapping_s_t and mapping_s_t[s[i]] != t[i]:
            return False 
        if t[i] in mapping_t_s and mapping_t_s[t[i]] != s[i]:
            return False 

        mapping_s_t[s[i]] = t[i]
        mapping_t_s[t[i]] = s[i]

    return True

print(isIsomorphic(s1, t1)) # true
print(isIsomorphic(s2, t2)) # false
print(isIsomorphic(s3, t3)) # true