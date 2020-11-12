// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
    let length = prompt('Number of characters: ')
    let idCount = prompt('Number of ids to generate: ')

    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i<idCount; i++) {
        for ( var j = 0; j < length; j++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        console.log(result)
        result = ''
    }
}

// Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, number) {

    if (type == 'hexa') {
        var characters = '0123456789abcdef'
        var colours = []

        for (var i = 0; i < number; i++) {
            var colour = '#'
            for (var j = 0; j < 6; j++) {
                colour += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            colours.push(colour)
            colour = '#'
        }

        if (number > 1) {
            return colours
        } else {
            return colours[0]
        }
        

    } else if (type == 'rgb') {
        var colours = []

        for (var i = 0; i < number; i++) {
            var rgbValues = []
            var colour = ''
            for (var j = 0; j < 3; j++) {
                rgbValues[j] = (Math.floor(Math.random() * 256))
            }
            colours.push('rgb(${rgbValues[0], rgbValues[1], rgbValues[2]})')
        }

        if (number > 1) {
            return colours
        } else {
            return colours[0]
        }
    }
}

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    var arrayLength = arr.length
    var newArr = []

    for (var i = 0; i < arrayLength; i++) {
        var randomIndex = Math.floor(Math.random() * arr.length)
        var victim = arr[randomIndex]
        arr.splice(randomIndex, 1)
        newArr.push(victim)
    }

    return newArr
}

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(x) {
    return (x != 1) ? x * factorial(x - 1) : 1
}

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(item) {
    return (item === undefined || item.length == 0)
}

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    var total = 0
    for (element in arr) {
        if (isNaN(element)) {
            return 'Error: The array contains non number elements when calculating average'
        }

        total += element
    }

    return (total/arr.length)
}