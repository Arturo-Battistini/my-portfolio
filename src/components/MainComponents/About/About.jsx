import React, { useContext } from 'react'
import ProfilePicture from '../../../assets/perfil.jpg'
import { Contexto } from '../../../Contexto/index'

const About = () => {
  const { language } = useContext(Contexto)

  return (

    <section data-aos="fade-right" data-aos-delay="150" id='about' className='text-pText aboutme-container default-box '>

      <div className='universal-title_description--container w-full  '>
        <h3 className='universal-title_description'> {!language ? 'Acerca de mi' : 'About me'} </h3>
      </div>

      <div className='aboutme flex flex-nowrap sm:flex-col gap-5 '>

        <div className='aboutme-content w-[60%] flex flex-col gap-5 sm:w-full'>
          <article className='aboutme-description '>
          <p>
            {!language
              ? (
              <>
                Me considero una persona curiosa y comprometida con el desarrollo de productos digitales útiles y bien pensados. Valoro el trabajo en equipo, el aprendizaje continuo y el intercambio de ideas que enriquecen cada proyecto. Mi objetivo es aportar soluciones prácticas y eficientes, siempre con una visión orientada al usuario.
              </>
                )
              : (
              <>
                I consider myself a curious and committed person, focused on developing useful and well-designed digital products. I value teamwork, continuous learning, and the exchange of ideas that enrich every project. My goal is to provide practical and efficient solutions, always with a user-oriented vision.
              </>
                )}
          </p>

          </article>
          <p className='text-skyblue font-semibold mb-2'>{!language
            ? 'Stack más reciente:'
            : 'Latest stack:'}</p>
          <article className='aboutme-list-container flex w-full '>
            <ul className='aboutme-list w-full flex flex-wrap gap-3'>
              <li className='aboutme-item'> {!language ? 'Angular20' : 'Angular20'}</li>
              <li className='aboutme-item'> {!language ? 'SASS' : 'SASS'}</li>
              <li className='aboutme-item'> {!language ? 'Nest.js' : 'Nest.js'}</li>
              <li className='aboutme-item'> {!language ? 'MongoDB' : 'MongoDB'}</li>
              <li className='aboutme-item'> {!language ? 'Firebase' : 'Firebase'}</li>
            </ul>
          </article>
        </div>

        <div className='profile-picture w-[40%] h-[60%] sm:w-full'>

          <picture className='h-full flex justify-center relative

          before:content-[""] before:absolute before:top-[15px] before:ml-7 before:w-[100%] before:h-[100%]   before:rounded-md
          before:border-[1px] before:border-skyblue  before:mix-blend-hard-light
          before:z-[1] before:hover:top-[12px] before:hover:ml-6 before:transition-all before:duration-300 sm:before:w-[80%]

          after:content-[""] after:absolute after:top-[0]  after:w-[100%] after:h-[100%]  after:rounded-md
          after:transition-all after:duration-300 sm:after:w-[80%]
           after:bg-skyblue '>

            <img className='picture transition-all duration-300 w-[100%] p h-[100%] rounded-md z-[1] mix-blend-multiply object-cover object-top sm:w-[80%] '
              src={ProfilePicture} alt='Profile-Picture'

            ></img>
          </picture>
        </div>
      </div>

    </section>
  )
}

export default About
