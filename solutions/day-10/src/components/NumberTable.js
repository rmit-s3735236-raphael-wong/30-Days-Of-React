import React, {Component} from 'react'
import tableStyle from '../styles/table.css'

const primeNumbers = [2,3,5,7,11,13,17,19,23,29,31]

class NumberCell extends Component {
  render() {
    const number = this.props.number
    let numberType = 'even'
    if (number % 2 === 1) {
      numberType = 'odd'
    }
    if (primeNumbers.includes(number)) {
      numberType = 'prime'
    }
    return (<td className={numberType}>{number}</td>)
  }
}

class TableRow extends Component {
  render() {
    const numberRow = this.props.numberRow
    let row = numberRow.map((n) => <NumberCell number={n}/>)
    return (<tr>{row}</tr>)
  }
}

class NumberTable extends Component {
  render() {
    const numbers = this.props.numbers
    const numbersArray = numbers.map((numberRow) => <TableRow numberRow={numberRow}/>)
    return (
      <table className='numberTable' style={tableStyle}>
        {numbersArray}
      </table>
    )
  }
}

export default NumberTable