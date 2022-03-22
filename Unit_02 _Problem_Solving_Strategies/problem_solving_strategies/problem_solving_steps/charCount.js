// Write a function which takes a string and returns counts of 
// each character in the string

function charCount(str) {
    let result = {}
    
    // iterate through chars in string
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()

        if (/[a-z0-9]/.test(char)) {
            if (result.hasOwnProperty(char)) {
                result[char] += 1
            } else {
                result[char] = 1
            }
        }
    }

    return result
}

console.log(charCount("asdf")) // {a: 1, s: 1, d: 1, f: 1}
console.log(charCount("hello")) // {h: 1, e: 1, l: 2, o: 1}
console.log(charCount("Hello")) // should I merge lower/uppercase?
console.log(charCount("Hello World!"))
console.log(charCount("")) // should I return {} or undefined?