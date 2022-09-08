import React from 'react'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import './Header.css'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header id='header'>
      <div className='continer header__container'>
        <h5>Olá! Eu Sou</h5>
        <h1>Artur Vidor</h1>
        <h5 className="text-light">Desenvolvedor FullStack</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contant" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header