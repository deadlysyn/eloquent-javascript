// Build nested list from an array
const arrayToList = (array) => {
  let list = {}
  for (let val of array.reverse()) {
    if (list.rest === undefined) {
      list = {
        value: val,
        rest: null
      }
    } else {
      list = {
        value: val,
        rest: list
      }
    }
  }
  return list
}

console.log(arrayToList([1,2,3])) // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

// produce an array from a nested list...
const listToArray = (list) => {
  let array = []
  while (true) {
    array.push(list.value)
    if (list.rest === null) {
      break
    }
    list = list.rest
  }
  return array
}

console.log(listToArray(arrayToList([1,2,3]))) // [1,2,3]

// prepend an item to a nested list
const prepend = (val, list) => {
  return {
    value: val,
    rest: list
  }
}

console.log(listToArray(prepend(0, (arrayToList([1,2,3]))))) // [0,1,2,3]

// return nth value from list
const nth = (list, index) => {
  return listToArray(list)[index]
}

console.log(nth(arrayToList([1,2,3]), 1)) // 2

const nthRecursive = (list, index) => {
  if (index === 0) return list.value
  return nthRecursive(list.rest,index - 1)
}

console.log(nth(arrayToList([1,2,3]), 1)) // 2

// deep comparison
const deepEqual = (a, b) => {
  if (a === null && b === null) return true
  if (a === null || b === null) return false
  if (typeof(a) === "object" && typeof(b) === "object") {
    for (k of Object.keys(a)) {
      if (a[k] !== b[k]) return false
    }
  return true
  }
  if (a !== b) return false
  return true
}

console.log(deepEqual(1, 1)) // true
console.log(deepEqual(1, 10)) // false
console.log(deepEqual('abc', 'abc')) // true
console.log(deepEqual('abc', 'def')) // false
console.log(deepEqual(null, null)) // true

let objA = {
  a: 1,
  b: 10
}
let objB = {
  a: 1,
  b: 10
}
let objC = {
  a: 1,
  b: 2
}

console.log(deepEqual(objA, objB)) // true
console.log(deepEqual(objA, objC)) // false
