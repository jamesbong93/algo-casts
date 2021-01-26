// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = []

    let startedRow = 0
    let endedRow = n - 1
    let startedCol = 0
    let endedCol = n - 1
    let counter = 1

    for (let i = 0; i < n; i++) {
        result.push([])
    }

    while (startedCol <= endedCol && startedRow <= endedRow) {
        for (let i = startedCol; i <= endedCol; i++) {
            result[startedRow][i] = counter
            counter++
        }
    
        startedRow++
    
        for (let i = startedRow; i <= endedRow; i++) {
            result[i][endedCol] = counter
            counter++
        }
    
        endedCol--
    
        for (let i = endedCol; i >= startedCol; i--) {
            result[endedRow][i] = counter
            counter++
        }
    
        endedRow--
    
        for (let i = endedRow; i >= startedRow; i--) {
            result[i][startedCol] = counter
            counter++
        }
        startedCol++
    }

    return result
}

module.exports = matrix;
