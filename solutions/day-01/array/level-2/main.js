// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
include('countries.js')
include('web_tech.js')

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace('.','')
text = text.replace(',','')
var words = text.split(' ')
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.remove('Honey')
shoppingCart.replace('Tea', 'Green Tea')

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
ethiopiaInCountries = countries.includes('Ethiopia')
console.log(ethiopiaInCountries)
if (!ethiopiaInCountries) {
    countries.push('Ethiopia')
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
sassExists = webTechs.includes('Sass')
console.log(sassExists)
if (sassExists) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)