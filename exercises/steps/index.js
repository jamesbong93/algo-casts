// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // Method 1
    // for (let i = 1; i <= n; i++) {
    //     let line = ""
    //     for (let j = 1; j <= i; j++) {
    //         line += "#"
    //     }
    //     for (let k = 1; k <= (n - i); k++) {
    //         line += " "
    //     }
    //     console.log(line)
    // }

    // Method 2
    // for (let i = 0; i < n; i++) {
    //     let line = ""
    //     for (let j = 0; j < n; j++) {
    //         if (j <= i) {
    //             line += "#"
    //         } else {
    //             line += " "
    //         }
    //     }
    //     console.log(line)
    // }

    // Method 3 (Recursive solution)
    if (n === row) {
        return
    }

    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1)
    }

    if (stair.length <= row) {
        stair += "#"
    } else {
        stair += " "
    }

    steps(n, row, stair)
}

// steps(1)

module.exports = steps;
