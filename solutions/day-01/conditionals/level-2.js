// Write a code which can give grades to students according to theirs scores: 
let score = prompt('Enter student score:')
switch (true) {
    case score >= 80 && score <= 100 :
        console.log('Grade A')
        break
    case score >= 70 && score <= 79 :
        console.log('Grade B')
        break
    case score >= 60 && score <= 69 :
        console.log('Grade C')
        break
    case score >= 50 && score <= 59 :
        console.log('Grade D')
        break
    case score >= 0 && score <= 49 :
        console.log('Grade F')
        break
    default :
        console.log('Invalid score entered. Please make sure its between 0 to 100.')
}

// Check if the season is Autumn, Winter, Spring or Summer.
let monthInput = prompt('Enter month:')
var month = monthInput.toLowerCase()
switch (month) {
    case 'september':
    case 'october' :
    case 'november' :
        console.log('The season is Autumn')
        break
    case 'december':
    case 'january' :
    case 'february' :
        console.log('The season is Winter')
        break
    case 'march':
    case 'april' :
    case 'may' :
        console.log('The season is Spring')
        break
    case 'june':
    case 'july' :
    case 'august' :
        console.log('The season is Summer')
        break
    default:
        console.log('Invalid month')
}

// Check if a day is weekend day or a working day
let dayInput = prompt('What is the day today?')
var day = dayInput.toLowerCase()
switch (day) {
    case 'monday':
        console.log('Monday is a working day.')
        break
    case 'tuesday':
        console.log('Tuesday is a working day.')
        break
    case 'wednesday':
        console.log('Wednesday is a working day.')
        break
    case 'thursday':
        console.log('Thursday is a working day.')
        break
    case 'friday':
        console.log('Friday is a working day.')
        break
    case 'saturday':
        console.log('Saturday is a weekend.')
        break
    case 'sunday':
        console.log('Sunday is a weekend.')
        break
    default:
        console.log('Invalid day.')
}