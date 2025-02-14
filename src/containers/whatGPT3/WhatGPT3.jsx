import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'
import mouhamed from './mouhamed.js'

function createFeature(mouhamed) {
  return (
    <Feature key={mouhamed.id} title={mouhamed.title} text={mouhamed.text} />
  )
}

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section___margin' id='whgpt3'>
      <div className='gpt3__whatgpt3-features'>
        <Feature title='What is GPT-3' text='GPT-3 (Generative Pre-trained Transformer 3) is a powerful AI language model developed by OpenAI. It uses deep learning to generate human-like text based on the input it receives.'/>
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient___text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
       {mouhamed.map(createFeature)}
      </div>

    </div>
  )
}

export default WhatGPT3;
