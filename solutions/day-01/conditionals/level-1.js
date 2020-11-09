// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt('Enter your age:')
if (age >= 18) {
    console.log('You are old enough to drive.')
} else {
    var ageLeft = 18 - age
    console.log('You are left with ${ageLeft} years to drive.')
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = prompt('Enter your age:')
const myAge = 21
var ageDiff = abs(yourAge - myAge)
if (yourAge > myAge) {
    console.log('You are ${ageDiff} years older than me.')
} else if (myAge > yourAge) {
    console.log('I am ${ageDiff} years older than you.')
} else {
    console.log('We both have the same age')
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// - using if else
// - ternary operator.
let a = 4
let b = 3

if (a > b) {
    console.log('${a} is greater than ${b}')
} else {
    console.log('${a} is less than ${b}')
}

(a > b) ? console.log('${a} is greater than ${b}') : console.log('${a} is less than ${b}')

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number:')
(number % 2 == 0) ? console.log('${number} is an even number') : console.log('${number} is an odd number.')

