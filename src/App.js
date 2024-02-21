import React from 'react'
import {Header, Blog, Possibility, Footer, WhatGPT3, Features} from './containers'
import {Navbar, Cta, Brand} from './components';
import './App.css'
import './index.css'

function App() {
  return (
    <div className='App'>
      <div className='gradient___bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
