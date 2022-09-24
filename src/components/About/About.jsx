import React from 'react'
import { BsAwardFill } from 'react-icons/bs'
import { RiCodeBoxFill, RiTrelloFill } from 'react-icons/ri'
import './About.css'
import ME from '../../assets/me-about.png'

function About () {
  return (
    <section id="about">
      <h5>Venha Saber</h5>
      <h2>Sobre Mim</h2>

      <div className='about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about me img'/>
          </div>
                  </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experiência</h5>
              <small>Mais de 15 Projetos Finalizados</small>
            </article>

            <article className='about__card'>
              <RiCodeBoxFill className='about__icon'/>
              <h5>Linguagens</h5>
              <small>HTML 5, CSS 3, JavaScript, React.</small>
            </article>

            <article className='about__card'>
              <RiTrelloFill className='about__icon'/>
              <h5>Metodologia Ágil</h5>
              <small>Kanban, Trello, Slack, Zoom, Discord.</small>
            </article>
          </div>
          <br />
          <p>
          Me chamo Artur Dal Berto Vidor. Sou Tecnólogo em Gestão de Turismo pela Faculdade Municipal de Palhoça. E estudante de Desenvolvimento Web na Trybe. Natural de Santa Maria - RS, morando atualmente em Palhoça - SC.
        </p>
        <br/>
        <a href='#contact' className='btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About
