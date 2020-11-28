import React, {Component} from 'react'
import hexaColor from '../functions/hexaColor'

const colorStyle = (color) => {
    return {
      backgroundColor: color,
      textAlign: 'center',
      fontFamily: 'Roboto Condensed',
      padding: '40px',
      color: 'white',
      fontSize: 'larger'
    }
}
  
class HexaColor extends Component {
    render() {
        const color = this.props.color
        return (<div style={colorStyle(color)} key={color}>{color}</div>)
    }
}
  
class HexaColors extends Component {
    render() {
        let colors = []
        for (var i = 0; i < 6; i++) {
        colors.push(<HexaColor color={hexaColor()}/>)
        }
        return colors
    }
}

export default HexaColors