// use recursion to determine if a number is even

const isEven = x => {
  switch (Math.abs(x)) {
    case 0:
      return true
    case 1:
      return false
    default:
      return isEven(Math.abs(x) - 2)
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(-2))
