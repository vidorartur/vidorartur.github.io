import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/artur-dal-berto-vidor-9733a2167/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/vidorartur" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials