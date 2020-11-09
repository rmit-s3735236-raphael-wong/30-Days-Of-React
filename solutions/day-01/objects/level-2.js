const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// Find the person who has many skills in the users object.
var maxNumSkills = 0
var maxNumSkillsPerson
const usersArray = Object.keys(users)
for (const user of usersArray) {
    const userObject = users[user]
    const userSkills = userObject.skills

    if (userSkills.length > maxNumSkills) {
        maxNumSkills = userSkills.length
        maxNumSkillsPerson = user
    }
}

console.log(user)

// Count logged in users,count users having greater than equal to 50 points from the following object.
var numLoggedIn = 0
var numGreaterThan50Points = 0
for (const user of usersArray) {
    const userObject = users[user]
    if (userObject.isLoggedIn) {
        numLoggedIn++
    }
    if (userObject.points >= 50) {
        numGreaterThan50Points++
    }
}

console.log(numLoggedIn)
console.log(numGreaterThan50Points)

// Find people who are MERN stack developer from the users object
var numMERN = 0
for (const user of usersArray) {
    const userObject = users[user]
    const userSkills = userObject.skills

    if (userSkills.include('MongoDB') && userSkills.include('Express') && userSkills.include('React') && userSkills.include('Node')) {
        numMERN++
    }
}

console.log(numMERN)

// Set your name in the users object without modifying the original users object
users.raphael = {}

// Get all keys or properties of users object
for (const user of usersArray) {
    const userObject = users[user]
    const userKeys = Object.keys(userObject)
    console.log(userKeys)
}

// Get all values of user object
for (const user of usersArray) {
    const userObject = users[user]
    const userValues = Object.values(userObject)
    console.log(userValues)
}

// Use the countries object to print a country name, capital, populations and languages.
const countries = [
    {
        name: 'Malaysia',
        capital: 'Kuala Lumpur',
        population: '6 Million',
        languages: ['Malay', 'English', 'Chinese', 'Indian']
    }
]
