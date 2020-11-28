import React, {Component} from 'react'


const subscribe = 'SUBSCRIBE'
const subscribeMsg = 'Sign up with your email address to receive news and updates'

class Input extends Component {
  render() {
    return(<input placeholder={this.props.placeholder}></input>)
  }
}

class Inputs extends Component {
  render() {
    const placeholders = ['First name','Last name', 'Email']
    const inputs = placeholders.map((placeholder) => <Input placeholder={placeholder}/>)
    return (inputs)
  }
}

class Button extends Component {
  render() {
    return(<button type="button">{this.props.buttonMsg}</button>)
  }
}

class Subscribe extends Component {
  render() {
    return (
      <div className="signup" style={this.props.style}>
      <h1>{subscribe}</h1>
      <p>{subscribeMsg}</p>
      <Inputs/>
      <p></p>
      <Button buttonMsg="Subscribe"/>
    </div>
    )
  }
}

export default Subscribe