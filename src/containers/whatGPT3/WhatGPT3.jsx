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
        <Feature title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
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
