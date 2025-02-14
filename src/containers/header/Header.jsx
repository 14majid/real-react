import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt3__header section___padding' id='home'>

      <div className='gpt3__header-content'>
        <h1 className='gradient___text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Discover how GPT-3 by OpenAI can revolutionize the way you create, innovate, and solve problems. Join us on this journey into the future of AI-powered solutions</p>
      

        <div className='gpt3__header-content-input'>
          <input type='Email' placeHolder='Your Email Adress' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content-people'>
         <img src={people} alt='people' />
         <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-ai'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header;
