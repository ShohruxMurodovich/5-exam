import React from 'react'
import { NavLink } from 'react-router-dom'
import "./OptionItem.css"

export default function OptionItem({ text, to, Icon }) {
  return (
    <li className="options__item">
      <NavLink className="link" to={to}>
        <Icon/>
        <span className='options__text'>{text}</span>
      </NavLink>
    </li>
  )
}
