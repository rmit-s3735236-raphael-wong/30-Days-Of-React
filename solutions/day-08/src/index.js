import React from 'react';
import ReactDOM from 'react-dom';

import {countriesData} from './countries.js'

import appStyle from './app.css'

const title = '30 Days Of React'

const buttonStyle = {
  backgroundColor: '#00ccff',
  padding: '20px',
  color: 'white',
  borderRadius: '5px',
  border: 'none'
}

const Button = ({ text, onClick, style }) => (
  <button onClick={onClick} style={style}>
    {text}
  </button>
)

const CountryInfo = ({country}) => {
  console.log(country)
  const {name, capital, languages, population, flag, currency} = country
  var languageTitle = 'Language'
  var languagesList = languages
  if (languages.length > 1) {
    languageTitle = 'Languages'
    languagesList = languages.map((lang) => lang.concat(', '))
    var langListLength = languagesList.length
    languagesList[langListLength-1] = languagesList[langListLength-1].slice(0,-2)
  }
  return (
    <div className='countryInfo'>
      <img src={flag} alt='flag' style={{ width:'50%' }}/>
      <p><b>{name.toUpperCase()}</b></p>
      <div className='countryDetails'>
        <p><b>Capital:</b> {capital}</p>
        <p><b>{languageTitle}:</b> {languagesList}</p>
        <p><b>Population:</b> {population}</p>
        <p><b>Currency:</b> {currency}</p>
      </div>
    </div>
  )
  
}

const randomNo = () => {
  Math.floor(Math.random() * countriesData.length); 
}

class JsxElement extends React.Component {
  state = {
    styles: appStyle,
    darkMode: false,
    countryNo: 0
  }

  changeBackground = () => {
    if (this.state.darkMode) {
      this.setState({
        styles: {
          backgroundColor: 'white',
          color: 'black',
        },
        darkMode: false
      })  
    } else {
      this.setState({
        styles: {
          backgroundColor: '#222233',
          color: 'white',
        },
        darkMode: true
      })  
    }
  }

  randomNo = () => {
    return Math.floor(Math.random() * countriesData.length); 
  }

  changeCountry = () => {
    this.setState({countryNo: Math.floor(Math.random() * countriesData.length)})
  }

  render() {
    return (
      <div className='app' style={this.state.styles}>
        <h1>{title}</h1>
        <Button text='Change Background' onClick={this.changeBackground} style={buttonStyle}/>
        <h2>Country Selector</h2>
        <CountryInfo country={countriesData[this.state.countryNo]}/>
        <Button text='Select Country' onClick={this.changeCountry} style={buttonStyle}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<JsxElement/>, rootElement);

