import React , { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


function Menu() {
  return(
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#whgpt3'>WHAT is GPT?</a></p>
      <p><a href='#Possibility'>Open AI</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
    </>
  )
}

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
         <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links-logo-container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-links-logo-container-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        {toggleMenu 
         ? <RiCloseLine color='#fff' cursor='pointer' size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color='#fff' cursor='pointer' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gtp3__navbar-menu-container-links'>
            <div className='gpt3__navbar-menu-links-container'>
              <Menu />
              <div className='gpt3__navbar-menu-container-links-sign'>
               <p>Sign in</p>
               <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar;
