import React from 'react'
import {TiHome, TiUser} from 'react-icons/ti'
import {RiBookFill, RiMessage2Fill} from 'react-icons/ri'
import './Nav.css'

function Nav() {
  return (
    <nav>
      <a href="#header" ><TiHome /></a>
      <a href="#about" ><TiUser /></a>
      <a href="#portfolio" ><RiBookFill /></a>
      <a href="#contact" ><RiMessage2Fill /></a>
    </nav>
  )
}

export default Nav