/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise. Use a dictionary.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Source: https://leetcode.com/problems/valid-anagram/
 */

 const s = 'anagram'
 const t = 'nagaram'
 const u = 'rat'
 const v = 'car'

 // Time complexity: O(n)
 // Space complexity: O(1)
 function anagram(s, t) {
    // check edge cases
    if (s.length !== t.length) return false

    // make dictionary to hold char counts
    let charCount = {}

    // iterate through first string, add to dictionary
    for (char of s) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    // iterate through second string, subtract from dictionary
    for (char of t) {
        if (charCount[char]) {
            charCount[char] -= 1
        } else return false // if char doesn't exist, return false
    }
    
    // if char counts are all 0, return true
    for (char in charCount) {
        if (charCount[char] !== 0) return false
    }

    return true
 }

 console.log(anagram(s, t)) // true
 console.log(anagram(u, v)) // false

 // Alternate solution
 // Compare sorted strings
 // Time complexity: O(nlogn)