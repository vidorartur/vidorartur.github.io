import React from 'react'
import './Footer.css'

function Footer () {
  return (
    <footer id='footer'>
      <a href="#about" className="footer__logo">Artur Vidor</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Send a Message</a></li>
      </ul>
    </footer>
  )
}

export default Footer
