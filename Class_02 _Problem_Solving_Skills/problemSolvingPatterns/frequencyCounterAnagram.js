// Optional example: uses Frequency Counter
// SOLUTION

function validAnagram(a, b) {
    //declare two objects
    let objectOne = {};
    let objectTwo = {};
    
    //if strings are different lengths, return false
    if (a.length !== b.length) return false;
    
    //iterate over each object to track frequencies
    for(let char of a) {
        objectOne[char] = (objectOne[char] || 0) + 1;
    }
    for(let char of b) {
        objectTwo[char] = (objectTwo[char] || 0) + 1;
    }
    
    //check if second object frequency/values match the first
    for(let char in objectOne) {
        //does the character exist in objectTwo?
        if(!(objectTwo.hasOwnProperty(char))) {
            return false;
        }
        //does the char count match objectOne's count?
        if(objectTwo[char] !== objectOne[char]) {
            return false;
        }
    }
    return true;
  }

console.log(validAnagram("aaz", "zza")) // false
console.log(validAnagram("cinema", "iceman")) // true
console.log(validAnagram("rat", "tar")) // true