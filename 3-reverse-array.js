// reversing arrays without using the standard reverse method...

// pure function does not mangle input array (no side effects)
const reverseArray = (origArray) => {
  let newArray = []
  for (let i = origArray.length - 1; i >= 0; i--) {
    newArray.push(origArray[i])
  }
  return newArray
}

console.log(reverseArray(['a', 'b', 'c'])) // ['c', 'b', 'a']

// faster in some cases, with side effects
const reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let lhs = array[i]
    let rhs = array[array.length - (i + 1)]
    array[i] = rhs
    array[array.length - (i + 1)] = lhs
  }
  return array
}

console.log(reverseArrayInPlace(['d', 'e', 'f'])) // ['f', 'e', 'd']
