/* Chessboard
    Create and print a string representing an 8x8 grid using
    newlines to separate lines.
*/

const size = 8
let board = ''

for (let i = 1; i <= size; i++) {
  let row = ''
  if (i % 2 == 0) {
    for (let i = 1; i <= size; i++) {
      if (i % 2 == 0) {
        row += ' '
      } else {
        row += '#'
      }
    }
    board += `${row}\n`
  } else {
    for (let i = 1; i <= size; i++) {
      if (i % 2 == 0) {
        row += '#'
      } else {
        row += ' '
      }
    }
    board += `${row}\n`
  }
}

console.log(board)
