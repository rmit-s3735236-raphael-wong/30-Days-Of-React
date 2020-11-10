// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: '',
    lastName: '',
    incomes: {
        incomeSet: [],
        descritption: ''
    },
    expenses: {
        expenseSet: [],
        description: ''
    },

    totalIncome: function() {
        let total = 0
        for (income in this.income.incomeSet) {
            total = total + income
        }
        return total;
    },
    totalExpense: function() {
        let total = 0
        for (expense in this.expense.expenseSet) {
            total = total + expense
        }
        return total;
    },
    accountInfo: function() {
        return 'First Name: {this.firstName}, Last Name: {this.lastName}, Total Income: {this.totalIncome}, Total Expense: {this.totalExpense}';
    },
    addIncome: function(newIncome) {
        this.income.incomeSet.push(newIncome)
    },
    addExpense: function(newExpense) {
        this.expense.expenseSet.push(newExpense)
    },
    accountBalance: function() {
        let balance = this.totalIncome - this.totalExpense
        return 'Account balance: {balance}';
    }   
}

// users and products
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
]

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account
function signUp(new_id, new_username, new_email, new_password, new_createdAt) {
    let userExists = false
    for (user in users) {
        if (user.username == new_username) {
            userExists = true
            return 'Username already exists.'
        }
    }
    if (!userExists) {
        let newUser = {
            _id: new_id,
            username: new_username,
            email: new_email,
            password: new_password,
            createdAt: new_createdAt,
            isLoggedIn = false
        }
        users.push(newUser)
    }
}

// b. Create a function called signIn which allows user to sign in to the application
function logIn(username, password) {
    let userExists = false
    for (user in users) {
        if (user.username == username) {
            if (user.password == password) {
                user.isLoggedIn = true
            } else {
                return 'Incorrect username or password'
            }
        }
    }
    if (!userExists) {
        return 'User does not exists'
    }
}

// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product
function rateProduct(productID, userID, rating) {
    for (product in products) {
        if (product._id == productID) {
            product.ratings.push({ userId: userID, rate: rating})
            break
        }
    }
}

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productID) {
    for(product in products) {
        if (product._id == productID) {
            let avgTotal = 0
            for(rating in product.ratings) {
                avgTotal += rating.rate
            }
            return avgTotal / product.ratings.length
        }
    }
}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(userID, productID) {
    for (product in products) {
        if (product._id == productID) {
            if (product.ratings.includes(userID)) {
                product.ratings.remove(userID)
            } else {
                product.ratings.push(userID)
            }
            break
        }
    }
}