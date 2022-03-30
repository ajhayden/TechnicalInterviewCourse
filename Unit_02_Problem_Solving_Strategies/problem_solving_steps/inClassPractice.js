// Write a function which takes a string and returns counts of 
// each character in the string

function charCount(str) {
    // declare object to return
    let result = {}
    lowerStr = str.toLowerCase()

    // loop through string
    for (let i = 0; i < lowerStr.length; i++) {
        // check alphanumeric
        if (/[a-z0-9]/.test(char)) {
            result[char] ? result[char] += 1 : result[char] = 1
        }
    }

    return result
}

console.log(charCount("hello")) // {h: 1, e: 1, l: 2, o: 1}
console.log(charCount("")) // {}
console.log(charCount("Hello")) // {h: 1, e: 1, l: 2, o: 1}
console.log(charCount("Hello World!")) // {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1} 