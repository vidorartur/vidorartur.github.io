import React from 'react'
import RickAndMorty from '../../assets/RickAndMorty.png'
import Athena from '../../assets/Athena.png'
import './Portfolio.css'

function Portfolio () {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfólio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={RickAndMorty} alt="" />
          </div>
          <h3>Rick and Morty API</h3>
          <p>Este projeto foi realizado com o intuito de treinar React.js 18, React Hooks, Context API, Fetch API (com foco na paginação dos itens), HTML 5 e CSS 3.</p>
          <br />
          <div className='portfolio__items-cta'>
            <a href='https://github.com/vidorartur/RickAndMortyAPI/'
            className='btn-github'
            target='_blanck'>GitHub</a>
            <a href='https://rick-and-morty-api-sandy.vercel.app/' className='btn-github'
            target='_blanck'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={Athena} alt="" />
          </div>
          <h3>Athena Sports E-Commerce</h3>
          <p>Este projeto foi realizado com o intuito de treinar React.js 18, BrowserRouter 5, React Hooks, Context API, Fetch API, HTML 5 e CSS 3.</p>
          <br />
          <br />
          <div className='portfolio__items-cta'>
            <a href='https://github.com/vidorartur/athena-sports-e-commerce'
            target='_blanck' className='btn-github'>GitHub</a>
            <a href='https://athena-sports-e-commerce.vercel.app/' className='btn-github'
            target='_blanck'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
