import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possibility.css'

function Possibility() {
  return (
    <div className='gpt3__possibility section___padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibilityImage' />
      </div>
      <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient___text">The possibilities are <br /> beyond your imagination</h1>
      <p>Step into a world where innovation knows no bounds. Explore the endless opportunities that await, transforming the way you think, create, and connect. The future is here, and it's more extraordinary than you ever imagined.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
    </div>
  )
}

export default Possibility;
