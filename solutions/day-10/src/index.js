import React from 'react';
import ReactDOM from 'react-dom';

import appStyle from './styles/app.css';
import subscribeStyle from './styles/subscribe.css';
import profileStyle from './styles/profile.css';
import buttonStyle from './styles/button.js'

import {tenHighestPopulation} from './data/ten_most_highest_populations.js';

import frontEndImage from './images/frontend_technologies.png';
import profileImage from './images/profile.jpg';

import Subscribe from './components/Subscribe'
import Image from './components/Image'
import HexaColors from './components/HexaColors'
import Usercard from './components/Usercard'
import NumberTable from './components/NumberTable'
import ColorTable from './components/ColorTable'
import PopulationTable from './components/PopulationTable'
import Button from './components/Button'

import numbers from './functions/numbers'
import colors from './functions/colors'

const title = '30 Days Of React'
const fullName = "RAPHAEL WONG"
const bio = "Computer Science Student, Malaysia"
const skillList = ['HTML', 'CSS', 'JS', 'PHP', 'React', 'MySQL', 'MongoDB', 'Python', 'C', 'C++', 'Java']
const date = "20 November 2020"

class JsxElement extends React.Component {
  state = {
    styles: appStyle,
    darkMode: false,
    colorsSet: colors(),
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
    console.log(this.state.darkMode)
  }

  render() {
    return (
      <div className='app' style={this.state.styles}>
        <h1>{title}</h1>
        <Image image={frontEndImage} className='frontEndImg'/>
        <Subscribe style={subscribeStyle}/>
        <HexaColors />
        <Usercard style={profileStyle} image={profileImage} name={fullName} bio={bio} skills={skillList} date={date}/>
        <h2>Number Generator</h2>
        <NumberTable numbers={numbers()}/>
        <h2>Hexadecimal Colors</h2>
        <ColorTable colors={this.state.colorsSet}/>
        <h2>World population</h2>
        <p>Ten most populated countries</p>
        <PopulationTable data={tenHighestPopulation}/>
        <p>Change background <Button text='Change Background' onClick={this.changeBackground} style={buttonStyle}/></p>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<JsxElement/>, rootElement);

