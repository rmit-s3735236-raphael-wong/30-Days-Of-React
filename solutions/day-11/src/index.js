import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import boxStyle from './box.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      style: boxStyle,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  repositionBox = () => {
    let x = Math.floor(Math.random() * this.state.width)
    let y = Math.floor(Math.random() * this.state.height)
    this.setState({style:{ top: y + 'px', left: x + 'px' }})
    console.log({x,y})
  }

  render() {
    return (
      <div className='box' style={this.state.style} onMouseEnter={this.repositionBox}>
        <h1>30 DAYS OF REACT</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
