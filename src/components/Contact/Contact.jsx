import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { BsLinkedin, BsGithub, BsFillArrowRightSquareFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import './Contact.css'

function Contact () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_37vufsi', 'template_d6b1ybm', form.current, '4TBrtSVWcufwZzQlM')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Vamos Conversar?</h5>
      <h2>Mande Uma Mensagem</h2>
      <div className='container contact__container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <h2><GrMail /></h2>
            <h4>
              E-mail
            </h4>
            <h4>
              vidorartur@gmail.com
            </h4>
            <h3><BsFillArrowRightSquareFill /> <BsFillArrowRightSquareFill /> <BsFillArrowRightSquareFill /></h3>
          </article>
          <article className='contact-option'>

            <h2><BsGithub /></h2>
            <h4>
              Github
            </h4>
            <h5>
              Meus Repositórios Públicos
            </h5>
            <a href="https://github.com/vidorartur" target="_blanck">Acesse</a>
          </article>
          <article className='contact-option'>
            <h2><BsLinkedin /></h2>
            <h4>
              Linkedin
            </h4>
            <h5>
              Vamos Nos Conectar?
            </h5>
            <a href="https://www.linkedin.com/in/artur-dal-berto-vidor-9733a2167/" target="_blanck">Acesse</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Seu Nome Completo" required />
          <input type="email" name='email' placeholder="Seu Email" required />
          <textarea name='message' rows='7' placeholder="Sua Mensagem..." required></textarea>
          <button type='submit' className='btn-primary' id="submit">Enviar</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
