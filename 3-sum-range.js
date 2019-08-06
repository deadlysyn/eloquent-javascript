// write function to generate array series given start and end
const series = (start, end) => {
  let results = []
  if (typeof(start) === 'number' && typeof(end) === 'number') {
    for (let i = start; i <= end; i++) {
      results.push(i)
    }
  }
  return results
}

// console.log(series())         // []
// console.log(series(2))        // []
// console.log(series(2, 10))    // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// write function to sum an array series
const sum = (series) => {
  let sum = 0
  if (series.length > 0) {
    for (let i = 0; i < series.length; i++) {
      sum += series[i]
    }
  }
  return sum
}

// console.log(sum(series()))        // 0
// console.log(sum(series(1, 1)))    // 1
// console.log(sum(series(1, 2)))    // 3
// console.log(sum(series(1, 10)))   // 55

// modify #1 to support step
const seriesStep = (start, stop, step = 1) => {
  let results = []
  if (typeof(start) === 'number' && typeof(stop) === 'number' && typeof(step) === 'number' ) {
    if (start < stop)  {
      for (let i = start; i <= stop; i += Math.abs(step)) {
        results.push(i)
      }
    } else {
      for (let i = start; i >= stop; i -= Math.abs(step)) {
        results.push(i)
      }
    }
  }
  return results
}

console.log(seriesStep(2, 10))      // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(seriesStep(1, 10, 2))   // [ 1, 3, 5, 7, 9 ]
console.log(seriesStep(10, 1, -1))  // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(seriesStep(2, -5))      // [ 2, 1, 0, -1, -2, -3, -4, -5 ]

// console.log(sum(seriesStep(1, 10, 2)))
// console.log(sum(seriesStep(10, 1, -1)))
