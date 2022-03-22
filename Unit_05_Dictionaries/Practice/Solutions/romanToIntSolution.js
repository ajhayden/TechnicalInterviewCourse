/**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Input: s = "III"
Output: 3
Explanation: III = 3

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Source: https://leetcode.com/problems/roman-to-integer/
JavaScript solution: https://leetcode.com/problems/roman-to-integer/discuss/326345/Simple-JavaScript-Solution-Easy-Understanding
*/

const s = 'III'
const t = 'LVIII'
const u = 'MCMXCIV'

function romanToInt(s) {
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let value = 0;

    for(let i = 0; i < s.length; i+=1){
        if (symbols[s[i]] < symbols[s[i+1]] ) {
            value -= symbols[s[i]]
        } else {
            value += symbols[s[i]]
        }
    }

    return value
}

console.log(romanToInt(s)) // 3
console.log(romanToInt(t)) // 58
console.log(romanToInt(u)) // 1994

// Python solution: https://leetcode.com/problems/roman-to-integer/discuss/6537/My-Straightforward-Python-Solution