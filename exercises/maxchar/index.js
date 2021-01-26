// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    arr = str.split('')
    // Method 1
    hashTable = {}
    max = 0
    maxChar = ""

    arr.forEach(element => {
        if (element in hashTable) {
            hashTable[element]++
        } else {
            hashTable[element] = 1
        }
        
        if (hashTable[element] > max) {
            maxChar = element
        }
    });

    return maxChar
}

module.exports = maxChar;
