const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// Declare an empty array;
const emptyArray = Array()

// Declare an array with more than 5 number of elements
const numbers = [1,2,3,4,5,6,7]

// Find the length of your array
console.log(numbers.length)

// Get the first item, the middle item and the last item of the array
console.log(numbers[0])
console.log(numbers[3])
console.log(numbers[6])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [a, 'hello', 0, emptyArray, true, null]

console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

// Print out each company
console.log(itCompanies.toString())

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase()
  console.log(itCompanies[i])
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + 'are bit IT companies.')

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes('Google'))
console.log(itCompanies.includes('Baidu'))

// Filter out companies which have more than one 'o' without the filter method
var newItCompanies = itCompanies
for (let i = 0; i < newItCompanies.length; i++) {
  var numberOfOs = 0
  for (let j = 0; j < newItCompanies[i].length; i++) {
    if (newItCompanies[i][j] == 'o') {
      numberOfOs++
    }
  }
  if (numberOfOs < 2) {
    delete newItCompanies[i]
  }
}
console.log(newItCompanies)

// sort the array using sort() method
console.log(itCompanies.sort())

// reverse the array using reverse() method
console.log(itCompanies.reverse())

// slice out the first 3 companies from the array
console.log(itCompanies.slice(3))

// slice out the last 3 companies from the array
console.log(itCompanies.splice(4,3))

// slice out the middle companies from the array
console.log(itCompanies.splice(3,1))

// remove the first IT company from the array
console.log(itCompanies.shift())

// remove the middle IT company from the array
console.log(itCompanies.splice(3,1))

// remove the last IT company from the array
console.log(itCompanies.pop())

// remove all IT companies
itCompanies = []
