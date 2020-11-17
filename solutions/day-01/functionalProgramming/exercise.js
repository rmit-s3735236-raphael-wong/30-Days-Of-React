// Functional Programming
// Print the price of each product using forEach
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

products.forEach((product) => console.log('${product.product}, ${product.price}'))

// Print the product items as follows using forEach
products.forEach((product) => console.log('The price of ${product.product} is ${product.price} euros.'))

// Calculate the sum of all the prices using forEach
let sum = 0
products.forEach((product) => (sum += product.price))
console.log(sum)

// Find the first product which doesn't have a price value
const firstProductWithNoPrice = products.find((product) => product.price.isNaN())
console.log(firstProductWithNoPrice)

// Find the index of the first product which does not have price value
const firstIndexWithNoPrice = products.findIndex((product) => product.price.isNaN())
console.log(firstIndexWithNoPrice)

// Check if some products do not have a price value
const someProductsWithoutPrice = products.some((product) => product.price.isNaN())
console.log(someProductsWithoutPrice)

// Check if all the products have price value
const everyProductWithoutPrice = products.every((product) => product.price.isNaN())
console.log(everyProductWithoutPrice)

// Explain the difference between forEach, map, filter and reduce
// For each is applying the function for each element in the array
// Map returns a new array after applying a function to that array
// Filter helps to return a new array that meets the criteria
// Reduce returns an item after processing an array with a function

// Explain the difference between filter, find and findIndex
// Filter helps to return a new array that meets the criteria
// Find helps to return a single item that first meets the criteria
// FindIndex helps to return the index of the first item that meets the criteria.

// Explain the difference between some and every
// Some checks if any of the items in the array meets the criteria
// Every checks if all of the items in the arrya meets the criteria.