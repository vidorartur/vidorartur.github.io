import React from 'react'
import SolarSystem from '../../assets/SolarSystem.png'
import StarWars from '../../assets/StarWars.png'
import './Portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfólio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={SolarSystem} alt="" />
          </div>
          <h3>Solar System</h3>
          <div className='portfolio__items-cta'>
            <a href='https://github.com/tryber/sd-022-a-project-solar-system/tree/dev-artur-vidor' 
            className='btn-github'
            target='_blanck'>GitHub</a>
            {/* <a href='https://github.com' className='btn-primary'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={StarWars} alt="" />
          </div>
          <h3>Star Wars Planets</h3>
          <div className='portfolio__items-cta'>
            <a href='https://github.com/vidorartur/StarWarsPlanetsSearch'
            target='_blanck' className='btn-github'>GitHub</a>
            {/* <a href='https://github.com' className='btn-primary'>Live Demo</a> */}
          </div>
        </article>
        {/* <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={SolarSystem} alt="" />
          </div>
          <h3>Star Wars Planets</h3>
          <div className='portfolio__items-cta'>
            <a href='https://github.com' className='btn'>GitHub</a>
            <a href='https://github.com' className='btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={SolarSystem} alt="" />
          </div>
          <h3>Star Wars Planets</h3>
          <div className='portfolio__items-cta'>
            <a href='https://github.com' className='btn'>GitHub</a>
            <a href='https://github.com' className='btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={SolarSystem} alt="" />
          </div>
          <h3>Star Wars Planets</h3>
          <div className='portfolio__items-cta'>
            <a href='https://github.com' className='btn'>GitHub</a>
            <a href='https://github.com' className='btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={SolarSystem} alt="" />
          </div>
          <h3>Star Wars Planets</h3>
          <div className='portfolio__items-cta'>
            <a href='https://github.com' className='btn'>GitHub</a>
            <a href='https://github.com' className='btn-primary'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio