import React, { useContext } from 'react'
import { Contexto } from '../../../Contexto/index'
const handleScroll = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
const Presentation = () => {
  const { language, dayNight } = useContext(Contexto)

  return (

    <section data-aos="fade-right"
      data-aos-delay="300"
      id='home' className='presentation-container h-[100svh] flex flex-col justify-center p-3  ' >
      <div className='title-container '>
        <h1 className={`text-leadText titulo font-bold ${dayNight ? 'text-leadTextLight' : ''}`}>
          Arturo Battistini
        </h1>
      </div>

      <div className='sub-title_container'>
        <h2 className={`sub-title text-titleText titulo leading-[5rem] sm:leading-[2.5rem] opacity-80 ${dayNight ? 'text-titleTextLight' : ''}`}>
          {!language ? 'Full Stack Developer' : 'Full Stack Developer'}</h2>
        <h4 className={`sub-title text-titleText titulo leading-[5rem] sm:leading-[2.5rem] opacity-80  text-[clamp(30px,4vw,80px)] sm:text-[clamp(24px,5vw,80px)] bg-pan-left`}>
          {!language ? 'Frontend-focused' : 'Frontend-focused'}
          </h4>

      </div>

      <div className='title-description-container mt-5'>
        <p className={`title-description text-pText text-md mb-5 bg-pan-left sm:text-[clamp(14px,3vw,1rem)]`}>
          {!language ? 'Desarrollo aplicaciones web escalables con arquitecturas modernas y mejores prácticas.' : 'I develop scalable web applications with modern architectures and best practices.'}</p>

        <button className={`custonButton py-4 px-10 ${dayNight ? 'custonButtonLight' : ''}`}>
          <a onClick={() => handleScroll('contact')} rel="noreferrer">
            {!language ? 'Contactame' : 'Contact me'}
          </a>
        </button>
      </div>
    </section>
  )
}

export default Presentation
