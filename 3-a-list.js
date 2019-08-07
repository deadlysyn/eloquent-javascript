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

console.log(nth(arrayToList([1,2,3]), 1))
