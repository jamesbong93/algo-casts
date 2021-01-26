// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // Change the integer to string
    str = n.toString()
    
    // Reverse the string and parse as integer
    result = parseInt(str.split('').reduce((rev, char) => char + rev, ''))

    // return n < 0 ? result * -1 : result
    
    // Tackle negative sign
    return result * Math.sign(n)
}

module.exports = reverseInt;
