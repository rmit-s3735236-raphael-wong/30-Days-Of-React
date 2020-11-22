import React from 'react';
import ReactDOM from 'react-dom';

import subscribeStyle from './subscribe.css';
import profileStyle from './profile.css';

import frontEndImage from './images/frontend_technologies.png';
import profileImage from './images/profile.jpg';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const Image = (props) => (
  <div>
    <img src={props.image}/>
  </div>
)

const subscribe = 'SUBSCRIBE'
const subscribeMsg = 'Sign up with your email address to receive news and updates'

const Input = (props) => (
  <input placeholder={props.placeholder}></input>
)

const Inputs = () => {
  const placeholders = ['First name','Last name', 'Email']
  return placeholders.map((place) => <Input placeholder={place}/>)
}

const Button = (props) => (
  <button type="button">{props.buttonMsg}</button>
)

const Subscribe = (props) => (
  <div className="signup" style={props.style}>
    <h1>{subscribe}</h1>
    <p>{subscribeMsg}</p>
    <Inputs/>
    <Button buttonMsg="Subscribe"/>
  </div>
)

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

const HexaColor = (props) => (
  <div style={colorStyle(props.color)} key={props.color}>{props.color}</div>
)

const HexaColors = () => {
  let colors = []
  for (var i = 0; i < 6; i++) {
    colors.push(<HexaColor color={hexaColor()}/>)
  }
  return colors
}

const fullName = "RAPHAEL WONG"
const bio = "Computer Science Student, Malaysia"
const skillList = ['HTML', 'CSS', 'JS', 'PHP', 'React', 'MySQL', 'MongoDB', 'Python', 'C', 'C++', 'Java']
const date = "20 November 2020"

const Skills = (props) => {
  const list = props.list.map((skill) => <li key={skill}>{skill}</li>)
  return <ul>{list}</ul>
}

const Usercard = (props) => (
  <div className="user" style={props.style}>
    <Image image={props.image} />
    <h1>{props.name}</h1>
    <p>{props.bio}</p>
    <h1>SKILLS</h1>
    <Skills list={props.skills}/>
    <p>Joined on {props.date}</p>
  </div>
)

const JsxElement = () => (
  <div className = 'app'>
    <Image image={frontEndImage}/>
    <Subscribe style={subscribeStyle}/>
    <HexaColors />
    <Usercard style={profileStyle} image={profileImage} name={fullName} bio={bio} skills={skillList} date={date}/>
  </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(<JsxElement/>, rootElement);

