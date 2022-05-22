import React, { useState } from 'react'
import { Hamburg, Logo, Icons, } from "../../Assets/Images/Icons/Icon"
import "./Header.css"
import avatar from "../../Assets/Images/header-ava.png"
import { NavLink } from 'react-router-dom'

export default function Header() {

  const [darkMode, setDarkMode] = useState(window.localStorage.getItem("darkmode"));

  const handleDark = () =>{
    setDarkMode(window.localStorage.setItem("darkmode" , darkMode))
    setDarkMode(!darkMode)
    if(darkMode){
      document.body.classList.add('dark')
    }else(
      document.body.classList.remove('dark')
    )

  }


  return (
    <div className='header'>
      <div className="header__left">
        <button type='button'><Hamburg className="hamburg" /></button>
        <NavLink to="/"><Logo className="Logo" /></NavLink>
        <input placeholder='Search' className='search' autoComplete='off' type="search" name="search"></input>

        <div className={window.localStorage.getItem("darkmode") ? "dark-mode" : "light-mode"}>
          <div className="container">
            <span className='dark-text' style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <div className="switch-checkbox">
              <label className="switch">
                <input type="checkbox" onChange={handleDark} />
                <span className="slider round"> </span>
              </label>
            </div>
            <span className='dark-text' style={{ color: window.localStorage.getItem("darkmode") ? "#c96dfd" : "grey" }}>☽</span>
          </div>
          <div>
          </div>
        </div>


      </div>
      <div className="header__right">
        <Icons />
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  )
}
