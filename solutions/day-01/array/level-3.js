/* The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
- Sort the array and find the min and max age 
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min) 
- Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
var median = (ages[4] + ages[5])/2
var range = ages[9] - ages[0]
var average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9])/10
var minMinusAverage = abs(ages[0] - average)
var maxMinusAverage = abs(ages[9] - average)

console.log(ages)
console.log(median)
console.log(average)
console.log(range)
console.log(minMinusAverage)
console.log(maxMinusAverage)

// Slice the first ten countries from the countries array
include('countries.js')

countries.slice(10)

// Find the middle country(ies) in the countries array
middleIndex = countries.length / 2
middleIndex.round()

console.log(countries[middleIndex])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length % 2 != 0) {
    countries.shift()
}
const countries1 = countries
countries1 = countries1.splice((countries1/2),(countries1/2))
const countries2 = countries
countries2 = countries2.slice(countries2/2)

console.log(countries1)
console.log(countries2)
