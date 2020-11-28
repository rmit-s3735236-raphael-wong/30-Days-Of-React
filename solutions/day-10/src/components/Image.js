import React, {Component} from 'react'

class Image extends Component {
    render() {
      return (
        <div>
          <img src={this.props.image} alt={this.props.alt}/>
        </div>
      )
    }
}

export default Image