import React from 'react';
import ReactDOM from 'react-dom';

import appStyle from './app.css';
import tableStyle from './table.css';

import {tenHighestPopulation} from './ten_most_highest_populations.js'

const title = '30 Days Of React'

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

const primeNumbers = [2,3,5,7,11,13,17,19,23,29,31]

const NumberCell = ({number}) => {
  let numberType = 'even'
  if (number % 2 == 1) {
    numberType = 'odd'
  }
  if (primeNumbers.includes(number)) {
    numberType = 'prime'
  }
  return (<td className={numberType}>{number}</td>)
}

const TableRow = ({numberRow}) => {
  let row = numberRow.map((n) => <NumberCell number={n}/>)
  return (<tr>{row}</tr>)
}

const NumberTable = ({numbers}) => {
  
  const numbersArray = numbers.map((numberRow) => <TableRow numberRow={numberRow}/>)
  return (
    <table className='numberTable' style={tableStyle}>
      {numbersArray}
    </table>
  )
}

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

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

const colorStyle = (color) => {
  return {
    backgroundColor: color,
    fontWeight: 100
  }
}
const ColorCell = ({color}) => (
  <td style={colorStyle(color)}>{color}</td>
) 

const ColorTR = ({row}) => {
  row = row.map((color)=> <ColorCell color={color}/>)
  return (<tr>{row}</tr>)
}

const ColorTable = ({colors}) => {
  const colorArray = colors.map((row) => <ColorTR row={row}/>)
  return (
    <table className='colorTable' style={tableStyle}>
      {colorArray}
    </table>
  )
}

const PopulationTable = ({data}) => {
  const [world, ...countries] = data
  const total = world.population

  const populationList = data.map((countryEntry) => {
    const {country, population} = countryEntry
    const percentage = population / total * 100
    const size = percentage
    const barStyle = {
      backgroundColor: '#d2a33c',
      color: '#d2a33c',
      width: size * 350 / 100,
      display: 'block',
      borderRadius: '5px'
    }
    const nothing = '`'
    const bar = (<div style={barStyle}>{nothing}</div>)
    return (
      <tr>
        <td>{country}</td>
      <td className='bar'>{bar}</td>
        <td>{population}</td>
      </tr>
      )
  } )

  return (
    <table className='populationTable'>
      {populationList}
    </table>
  )

}

const JsxElement = () => (
  <div className='app' style={appStyle}>
    <h1>{title}</h1>
    <h2>Number Generator</h2>
    <NumberTable numbers={numbers()}/>
    <h2>Hexadecimal Colors</h2>
    <ColorTable colors={colors()}/>
    <h2>World population</h2>
    <p>Ten most populated countries</p>
    <PopulationTable data={tenHighestPopulation}/>
  </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(<JsxElement/>, rootElement);

