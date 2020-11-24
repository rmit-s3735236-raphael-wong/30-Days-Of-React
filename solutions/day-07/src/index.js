import React from 'react';
import ReactDOM from 'react-dom';

import appStyle from './app.css';
import tableStyle from './table.css';
import subscribeStyle from './subscribe.css';
import profileStyle from './profile.css';

import {tenHighestPopulation} from './ten_most_highest_populations.js';

import frontEndImage from './images/frontend_technologies.png';
import profileImage from './images/profile.jpg';

const title = '30 Days Of React'

class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.alt}/>
      </div>
    )
  }
}

const subscribe = 'SUBSCRIBE'
const subscribeMsg = 'Sign up with your email address to receive news and updates'

class Input extends React.Component {
  render() {
    return(<input placeholder={this.props.placeholder}></input>)
  }
}

class Inputs extends React.Component {
  render() {
    const placeholders = ['First name','Last name', 'Email']
    const inputs = placeholders.map((placeholder) => <Input placeholder={placeholder}/>)
    return (inputs)
  }
}

class Button extends React.Component {
  render() {
    return(<button type="button">{this.props.buttonMsg}</button>)
  }
}

class Subscribe extends React.Component {
  render() {
    return (
      <div className="signup" style={this.props.style}>
      <h1>{subscribe}</h1>
      <p>{subscribeMsg}</p>
      <Inputs/>
      <Button buttonMsg="Subscribe"/>
    </div>
    )
  }
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

class HexaColor extends React.Component {
  render() {
    const color = this.props.color
    return (<div style={colorStyle(color)} key={color}>{color}</div>)
  }
}

class HexaColors extends React.Component {
  render() {
    let colors = []
    for (var i = 0; i < 6; i++) {
      colors.push(<HexaColor color={hexaColor()}/>)
    }
    return colors
  }
}

const fullName = "RAPHAEL WONG"
const bio = "Computer Science Student, Malaysia"
const skillList = ['HTML', 'CSS', 'JS', 'PHP', 'React', 'MySQL', 'MongoDB', 'Python', 'C', 'C++', 'Java']
const date = "20 November 2020"

class Skills extends React.Component {
  render() {
    const list = this.props.list.map((skill) => <li key={skill}>{skill}</li>)
    return (<ul>{list}</ul>)
  }
}

class Usercard extends React.Component {
  render() {
    const props = this.props
    return (
      <div className="user" style={props.style}>
        <Image image={props.image} />
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
        <h1>SKILLS</h1>
        <Skills list={props.skills}/>
        <p>Joined on {props.date}</p>
      </div>
    )
  }
}

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

class NumberCell extends React.Component {
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

class TableRow extends React.Component {
  render() {
    const numberRow = this.props.numberRow
    let row = numberRow.map((n) => <NumberCell number={n}/>)
    return (<tr>{row}</tr>)
  }
}

class NumberTable extends React.Component {
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

const colorStyle2 = (color) => {
  return {
    backgroundColor: color,
    fontWeight: 100
  }
}

class ColorCell extends React.Component {
  render() {
    const color = this.props.color
    return (<td style={colorStyle2(color)}>{color}</td>)
  }
}

class ColorTR extends React.Component {
  render() {
    var row = this.props.row
    row = row.map((color)=> <ColorCell color={color}/>)
    return (<tr>{row}</tr>)
  }
}

class ColorTable extends React.Component {
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

class PopulationTable extends React.Component {
  getPopulation(countryEntry, total) {
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
  }

  render() {
    const data = this.props.data
    const [world, ...countries] = data
    const total = world.population
    const populationList = data.map((countryEntry) => this.getPopulation(countryEntry, total))

    return (
      <table className='populationTable'>
        {populationList}
      </table>
    )
  }
}

class JsxElement extends React.Component {
  render() {
    return (
      <div className='app' style={appStyle}>
        <h1>{title}</h1>
        <Image image={frontEndImage}/>
        <Subscribe style={subscribeStyle}/>
        <HexaColors />
        <Usercard style={profileStyle} image={profileImage} name={fullName} bio={bio} skills={skillList} date={date}/>
        <h2>Number Generator</h2>
        <NumberTable numbers={numbers()}/>
        <h2>Hexadecimal Colors</h2>
        <ColorTable colors={colors()}/>
        <h2>World population</h2>
        <p>Ten most populated countries</p>
        <PopulationTable data={tenHighestPopulation}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<JsxElement/>, rootElement);

