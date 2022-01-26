/**

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

A sentence is a string of single-space separated words where each word consists only of lowercase letters.
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Input: s1 = “this apple is sweet”, s2 = “this apple is sour”
Output: [“sweet”, “sour”]

Input: s1 = “apple apple”, s2 = “banana”
Output: [“banana”]

Source: https://leetcode.com/problems/uncommon-words-from-two-sentences/
Solution walkthrough: https://medium.com/nerd-for-tech/problem-solving-patterns-frequency-counter-20205a1ecfb7
*/

const s1 = 'this apple is sweet'
const s2 = 'this apple is sour'

const s3 = 'apple apple'
const s4 = 'banana'