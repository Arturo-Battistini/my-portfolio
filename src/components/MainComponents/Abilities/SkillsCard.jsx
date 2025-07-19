import React, { useContext } from 'react'
import { Contexto } from '../../../Contexto/index'
// eslint-disable-next-line react/prop-types
const SkillsCard = ({ skill, skill2, skill3, skill4, engTitle, serviceSelected }) => {
  const { language } = useContext(Contexto)

  return (
    <article className='services-description flex flex-col flex-wrap justify-center  h-auto '>

      <h4 className='portfolio-title after:hidden' >{
        serviceSelected === 1
          ? !language ? 'Tecnologías Frontend & Frameworks:' : engTitle || 'Frontend Technologies & Frameworks:'
          : serviceSelected === 2
            ? !language ? 'Tecnologías Backend & Bases de Datos:' : engTitle || 'Backend Technologies & Databases:'
            : serviceSelected === 3
              ? !language ? 'Herramientas de Desarrollo & Diseño:' : engTitle || 'Development Tools & Design:'
              : false}
      </h4>

      <ul className='services-list flex flex-col gap-2 mt-2'>
        <li className='aboutme-item'>{skill}</li>
        <li className='aboutme-item'>{skill2}</li>
        <li className='aboutme-item'>{skill3}</li>
        <li className='aboutme-item'>{skill4}</li>
      </ul>
    </article>
  )
}

export default SkillsCard
