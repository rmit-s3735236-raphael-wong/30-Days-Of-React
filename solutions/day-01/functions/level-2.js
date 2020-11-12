// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a = 0, b = 0, c = 0) {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
     if (x1 == x2) {
        return {x1}
     } else {
        return {x1, x2}
     }
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let currTime = new Date(2020,08,01,04,08)
    console.log(currTime)
}

showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
    return {b, a}
}

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.shift(arr[i])
    }
    return newArr
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase())
    }
    return newArr
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr, item) {
    arr.push(item)
    return arr
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index) {
    arr.remove(arr[index])
    return arr
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(x) {
    let numOfEvens = 0
    let numOfOdds = 0
    for (let i = 0; i <= x; i+=2) {
        numOfEvens++
    }
    for (let i = 1; i <= x; i+=2) {
        numOfOdds++
    }
    console.log('The number of odds are ${numOfOdds}')
    console.log('The number of evens are ${numOfEvens}')
}

// Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...args) => {
    let total = 0
    for (const element of args) {
        total += element
    }
    return total
}

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for ( var i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

console.log(userIdGenerator());