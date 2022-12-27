import React, { Component } from 'react'
import './ResultComponent.css'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='result'>
        <h1>Result</h1>
        <div className='container'>
          <h3>You need more practice!</h3>
          <h2>Your Score is 20%</h2>
          <div className='box'>
            <div className='details'>
              <p>Total number of questions</p>
              <p>Number of attempted questions</p>
              <p>Number of correct answer</p>
              <p>Number of wrong answer</p>
            </div>
            <div className='number'>
              <p>15</p>
              <p>9</p>
              <p>3</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <div className='button'>
          <button className='play'>Play Again</button>
          <button className='back'>Back to home</button>
        </div>
      </div>
    )
  }
}
