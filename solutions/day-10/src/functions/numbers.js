const numbers = () => {
    let numberArray = []
    for (var i = 0; i < 4; i++) {
        let rowArray = []
        for (var j = 0; j < 8; j++) {
            let number = i * 8 + j
            rowArray.push(number)
        }
        numberArray.push(rowArray)
    }
    return numberArray
}

export default numbers