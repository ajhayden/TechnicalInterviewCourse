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

function uncommonWords(str1, str2) {
    if (str1.length === 0 && str2.length !== 0) return str2.split(' ')
    if (str2.length === 0 && str1.length !== 0) return str1.split(' ')
    if (str1.length === 0 && str2.length === 0) return []

    const counts = {}
    let uncommon = []

    let arr1 = str1.split(' ')
    let arr2 = str2.split(' ')

    for (word of arr1) {
        counts[word] = (counts[word] || 0) + 1
    }

    for (word of arr2) {
        counts[word] = (counts[word] || 0) + 1
    }

    for (word in counts) {
        if (counts[word] === 1) uncommon.push(word)
    }

    return uncommon
}

console.log(uncommonWords(s1, s2))
console.log(uncommonWords(s3, s4))