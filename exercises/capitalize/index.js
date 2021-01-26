// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // Method 1
    // const arr = str.split(' ')
    // for (const [i, value] of arr.entries()) {
    //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    // }
    // return arr.join(' ')

    // Method 2
    // const arr = str.split(' ')
    // let result = ""
    // for (const [i, value] of arr.entries()) {
    //     const word = value.split('')

    //     for (const [j, char] of word.entries()) {
    //         if (j === 0) {
    //             result = result + char.toUpperCase()
    //         } else {
    //             result = result + char
    //         }
    //     }

    //     if (i !== (arr.length - 1)) {
    //         result = result + " "
    //     }
    // }
    // return result
    
    // Method 3
    let result = str[0].toUpperCase()
    for (let index = 1; index < str.length; index++) {
        if (result[index - 1] === " ") {
            result += str[index].toUpperCase()
        } else {
            result += str[index]
        }
    }
    return result
}

module.exports = capitalize;
