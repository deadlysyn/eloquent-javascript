/* FizzBuzz
    Print all numbers from 10 to 100, with two exceptions.
    For numbers divisible by 3, print "Fizz" instead of the number.
    For numbers divisible by 5 (and not 3), print "Buzz" instead.
    For numbers divisible by both 3 and 5, print "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  }
}
