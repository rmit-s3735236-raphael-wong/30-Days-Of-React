import React from 'react';
import ReactDOM from 'react-dom';

import {countriesData} from './countries.js'

import appStyle from './app.css'

const title = '30 Days Of React'

const today = new Date()
const currentHour = today.getHours()

const buttonStyle = {
  backgroundColor: '#00ccff',
  padding: '20px',
  color: 'white',
  borderRadius: '5px',
  border: 'none',
  margin: '5px',
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
      <img src={flag} alt='flag' style={{ height:'200px' }}/>
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

const randomNumber = () =>{
  const random = Math.floor(Math.random() * countriesData.length)
  return random
}

class JsxElement extends React.Component {
  state = {
    styles: appStyle,
    darkMode: false,
    countryNo: 0,
    season: 'none',
    hour: currentHour,
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

  changeToSummer = () => {
    this.setState({
      styles: {
        backgroundColor: '#ffff99',
        color: 'black'
      },
      darkMode: false
    })
  }

  changeToAutumn = () => {
    this.setState({
      styles: {
        backgroundColor: '#ffb380',
        color: 'black'
      },
      darkMode: false
    })
  }

  changeToWinter = () => {
    this.setState({
      styles: {
        backgroundColor: '#ccffff',
        color: 'black'
      },
      darkMode: false
    })
  }

  changeToSpring = () => {
    this.setState({
      styles: {
        backgroundColor: '#aaff80',
        color: 'black'
      },
      darkMode: false
    })
  }

  changeTimeBackground = () => {
    if (this.state.hour >= 6 && this.state.hour < 12) {
      this.setState({
        styles: {
          backgroundColor: '#80d4ff',
          color: 'black'
        },
        darkMode: false
      })
    } else if (this.state.hour >= 12 && this.state.hour < 17) {
      this.setState({
        styles: {
          backgroundColor: '#ccffff',
          color: 'black'
        },
        darkMode: false
      })
    } else if (this.state.hour >= 17 && this.state.hour < 20) {
      this.setState({
        styles: {
          backgroundColor: '#ff8533',
          color: 'black'
        },
        darkMode: false
      })
    } else if (this.state.hour >= 20 || this.state.hour < 6) {
      this.setState({
        styles: {
          backgroundColor: '#001a66',
          color: 'white'
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
        <div className='seasons'>
          <p>Select season</p>
          <Button text='Summer' onClick={this.changeToSummer} style={buttonStyle}/>
          <Button text='Autumn' onClick={this.changeToAutumn} style={buttonStyle}/>
          <Button text='Winter' onClick={this.changeToWinter} style={buttonStyle}/>
          <Button text='Spring' onClick={this.changeToSpring} style={buttonStyle}/>
        </div>
        <p>Change Background based on current time</p>
        <Button text='Change Background' onClick={this.changeTimeBackground} style={buttonStyle}/>

      </div>
    )
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<JsxElement/>, rootElement);

