import React, {Component} from 'react'
import tableStyle from '../styles/table.css'

const colorStyle2 = (color) => {
    return {
      backgroundColor: color,
      fontWeight: 100
    }
}

class ColorCell extends Component {
    render() {
        const color = this.props.color
        return (<td style={colorStyle2(color)}>{color}</td>)
    }
}

class ColorTR extends Component {
    render() {
        var row = this.props.row
        row = row.map((color)=> <ColorCell color={color}/>)
        return (<tr>{row}</tr>)
    }
}

class ColorTable extends Component {
    render() {
        const colors = this.props.colors
        const colorArray = colors.map((row) => <ColorTR row={row}/>)
        return (
        <table className='colorTable' style={tableStyle}>
            {colorArray}
        </table>
        )
    }
}

export default ColorTable