// count Bs in given string

const countBs = input => {
  let count = 0
  for (let x = 0; x < input.length; x++) {
    if (input[x] === 'B') count++;
  }
  return count
}

console.log(countBs('BBBBBBBBBBBBBBBBBBBBBB'));
console.log(countBs('BakdkekwkwBkskdkdkskB#*#*##*BBBBDKDKDKDKDkdkdkdbB'));

// count #chars in given string
const countChars = (input, char) => {
  let count = 0
  for (let x = 0; x < input.length; x++) {
    if (input[x] === char) count++
  }
  return count
}

console.log(countChars('BBBBBBBBBBBBBBBBBBBBBB', 'B'));
console.log(countChars('BakdkekwkwBkskdkdkskB#*#*##*BBBBDKDKDKDKDkdkdkdbB', 'B'))

// countBs using countChars
const countBss = input => countBs(input, "B")

console.log(countBs('BBBBBBBBBBBBBBBBBBBBBB'));
console.log(countBs('BakdkekwkwBkskdkdkskB#*#*##*BBBBDKDKDKDKDkdkdkdbB'));
