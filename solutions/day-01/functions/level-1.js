// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return '${firstName} ${lastName}'
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(x, y) {
    return x + y
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function _areaOfCircle(r) {
    return Math.PI * r * r
}

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(x) {
    return (x * 9 / 5) + 32
}

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
 - The same groups apply to both men and women.
 - Underweight: BMI is less than 18.5
 - Normal weight: BMI is 18.5 to 24.9
 - Overweight: BMI is 25 to 29.9
 - Obese: BMI is 30 or more
*/
function calculateBMI(height, weight) {
    let bmi = weight / (height * height)
    switch (true) {
        case bmi < 18.5 :
            return 'Underweight'
        case bmi >= 18.5 && bmi < 25 :
            return 'Normal weight'
        case bmi >= 25 && bmi < 30 :
            return 'Overweight'
        case bmi >= 30 :
            return 'Obese'
        default:
            return 'Invalid weight / height'
    }
}

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason (month) {
    month = month.toLowerCase()
    switch (month) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter'
        case 'march':
        case 'april':
        case 'may':
            return 'Spring'
        case 'june':
        case 'july':
        case 'august':
            return 'Summer'
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn'
        default:
            return 'Invalid Month'
    }
}
