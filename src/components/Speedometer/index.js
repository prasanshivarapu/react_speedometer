// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Accelerate = () => {
    this.setState(p => ({count: p.count + 10}))
  }

  Apply = () => {
    this.setState(p => ({count: p.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="greet1">
        <h1 className="greet2">Speedometer</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="spedometer"
        />
        <p className="greet2">speed is {count} mpH</p>
        <div>
          <button type="button" className="button" onClick={this.Accelerate}>
            {' '}
            Accelerate
          </button>
          <button type="button" className="button" onClick={this.Apply}>
            Apply breake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
