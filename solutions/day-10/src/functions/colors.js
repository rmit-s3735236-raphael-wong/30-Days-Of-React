import hexaColor from './hexaColor'

const colors = () => {
let array = []
    for (var i = 0; i < 4; i++) {
        let rowArray = []
        for (var j = 0; j < 8; j++) {
        var color = hexaColor()
        rowArray.push(color)
        }
        array.push(rowArray)
    }
    return array
}

export default colors