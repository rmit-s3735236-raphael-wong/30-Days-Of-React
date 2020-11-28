import React, {Component} from 'react'
import Image from './Image'

class Skills extends Component {
  render() {
    const list = this.props.list.map((skill) => <li key={skill}>{skill}</li>)
    return (<ul>{list}</ul>)
  }
}

class Usercard extends Component {
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

export default Usercard