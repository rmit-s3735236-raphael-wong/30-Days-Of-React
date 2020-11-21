import React from 'react';
import ReactDOM from 'react-dom';
import compare from './customModule.js';
import * as everything from './customModule.js';
import subscribeStyle from './subscribe.css';
import profileStyle from './profile.css';

import frontEndImage from './images/frontend_technologies.png';
import profileImage from './images/profile.jpg';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

/*
const minNumber = compare.min(6,9);

const headerElement = <h1>This is a JSX element</h1>;

const image = (<div><img src={frontEndImage} alt='Front End Technologies'/></div>)
const pfpImg = (<div><img src={profileImage} alt='Profile'/></div>)

const signUp = (
  <div className="signup" style={subscribeStyle}>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <input placeholder="First name"></input>
    <input placeholder="Last name"></input>
    <input placeholder="Email"></input>
    <p></p>
    <button type="button">Subscribe</button>
  </div>
)

const fullName = "RAPHAEL WONG"
const bio = "Computer Science Student, Malaysia"
const skillList = ['HTML', 'CSS', 'JS', 'PHP', 'React', 'MySQL', 'MongoDB', 'Python', 'C', 'C++', 'Java']
const skills = skillList.map((skill) => <li key={skill}>{skill}</li>)

const usercard = (
  <div className="user" style={profileStyle}>
    {pfpImg}
    <h1>{fullName}</h1>
    <p>{bio}</p>
    <h1>SKILLS</h1>
    <ul>{skills}</ul>
    <p>Joined on 20 November 2020</p>
  </div>
)


const jsxElement = (<div>
  {headerElement}
  <p>The minimum number is {minNumber}</p>
  <h2>Exercise 2</h2>
  <p>Front End Technologies</p>
  {image}
  <p>Subscription Form</p>
  {signUp}
  <h2>Exercise 3</h2>
  {usercard}
  </div>
  );

*/

const FrontendImage = () => (
  <img src={frontEndImage}/>
)

const SignUp = () => (
  <div className="signup" style={subscribeStyle}>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <input placeholder="First name"></input>
    <input placeholder="Last name"></input>
    <input placeholder="Email"></input>
    <p></p>
    <button type="button">Subscribe</button>
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

const HexaColor = (color) => {
  return <div style={colorStyle(color)} key={color}>{color}</div>
}

const HexaColors = () => {
  let colors = []
  for (var i = 0; i < 6; i++) {
    var color = hexaColor()
    colors.push(HexaColor(color))
  }
  return colors
}

const fullName = "RAPHAEL WONG"
const bio = "Computer Science Student, Malaysia"
const skillList = ['HTML', 'CSS', 'JS', 'PHP', 'React', 'MySQL', 'MongoDB', 'Python', 'C', 'C++', 'Java']
const skills = skillList.map((skill) => <li key={skill}>{skill}</li>)
const PfpImg = () => (<div><img src={profileImage} alt='Profile'/></div>)

const Usercard = () => (
  <div className="user" style={profileStyle}>
    <PfpImg />
    <h1>{fullName}</h1>
    <p>{bio}</p>
    <h1>SKILLS</h1>
    <ul>{skills}</ul>
    <p>Joined on 20 November 2020</p>
  </div>
)

const JsxElement = () => (
  <div className = 'app'>
    <FrontendImage />
    <SignUp />
    <HexaColors />
    <Usercard />
  </div>
)  

const rootElement = document.getElementById('root');

ReactDOM.render(<JsxElement/>, rootElement);
console.log(everything);

