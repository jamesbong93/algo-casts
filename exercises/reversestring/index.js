// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Method 1
    // return str.split('').reverse().join('')

    // Method 2
    // let array = str.split('')
    // let reversedStr = ''
    // for (let index = (array.length - 1); index >= 0; index--) {
    //     reversedStr = reversedStr + array[index]
    // }
    // return reversedStr

    // Method 3
    // let reversedStr = ''
    // for (let char of str) {
    //     reversedStr = char + reversedStr
    // }
    // return reversedStr

    // Method 4
    // debugger;
    return str.split('').reduce((rev, char) => char + rev, '')
}

// reverse('de')
module.exports = reverse;
