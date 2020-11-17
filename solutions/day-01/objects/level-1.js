// Create an empty object called dog
var dog = {}

// Print the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'John Wick'
dog.legs = 4
dog.color = 'black'
dog.age = 7
dog.bark = function () { 
    return 'woof woof'
}

// Get name, legs, color, age, and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'bulldog'
dog.getDogInfo = function () {
    let info = 'Name: {this.name}, Legs: {this.legs}, Color: {this.color}, Age: {this.age}, Breed: {this.breed}.'
    return info
}
