// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // Method 1
    // // Convert string to accept only latin character and to lower case
    // stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    // stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    // arrA = stringA.split('').sort()
    // arrB = stringB.split('').sort()

    // // The result is false if the length of the arrays is not matach
    // if (arrA.length !== arrB.length) {
    //     return false
    // }

    // hashA = {}
    // hashB = {}

    // for (const element of arrA) {
    //     if (element in hashA) {
    //         hashA[element] = hashA[element] + 1
    //     } else {
    //         hashA[element] = 1
    //     }
    // }
    // console.log(stringA)
    // console.log(hashA)
    // for (const element of arrB) {
    //     if (element in hashB) {
    //         hashB[element] = hashB[element] + 1
    //     } else {
    //         hashB[element] = 1
    //     }
    // }
    // console.log(stringB)
    // console.log(hashB)

    // for (let charA in hashA) {
    //     if (!charA in hashB) {
    //         return false
    //     } else {
    //         if (hashA[charA] !== hashB[charA]) {
    //             return false
    //         }
    //     }
    // }

    // return true

    // Method 2 
    const cleanStrA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
    const cleanStrB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')

    return cleanStrA === cleanStrB
}

module.exports = anagrams;
