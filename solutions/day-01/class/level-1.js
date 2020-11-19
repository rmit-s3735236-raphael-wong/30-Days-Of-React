// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    get getName() {
        return this.name
    }

    get getAge() {
        return this.age
    }

    get getColor() {
        return this.color
    }

    get getLegs() {
        return this.legs
    }
}

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
}

class Cat extends Animal {
}

