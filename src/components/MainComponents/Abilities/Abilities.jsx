import React, { useState, useContext } from 'react'
import { Contexto } from '../../../Contexto/index'

const Abilities = () => {
  const { language, dayNight } = useContext(Contexto)
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: !language ? 'Base de datos' : 'Database' },
    { id: 'tools', label: !language ? 'Herramientas' : 'Tools' }
  ]

  const skillsData = {
    frontend: [
      { name: 'HTML5 / CSS3', level: '95%', color: '#e34c26', desc: 'SASS, Tailwind, Flexbox, Grid' },
      { name: 'Angular 20', level: '90%', color: '#dd0031', desc: 'Zoneless, Signals, Services, Pipes, Directives' },
      { name: 'TypeScript 5', level: '90%', color: '#3178c6', desc: 'Strict Mode, Generics, Interfaces' },
      { name: 'React 18+', level: '25%', color: '#61dafb', desc: 'Hooks, Context, Redux, React Router' }
    ],
    backend: [
      { name: 'Node.js', level: '82%', color: '#68a063', desc: 'REST APIs, Guards, Interceptors, Middleware' },
      { name: 'Nest.js', level: '75%', color: '#f89820', desc: 'REST APIs, Guards, Interceptors, Middleware' },
      { name: 'ExpressJs', level: '18%', color: '#4db33d', desc: 'REST APIs, Guards, Interceptors, Middleware' },
      { name: 'Java', level: '5%', color: '#00758f', desc: 'Spring Boot, JPA, Hibernate' }
    ],
    database: [
      { name: 'MongoDB', level: '90%', color: '#4db33d', desc: 'NoSQL' },
      { name: 'Oracle SQL / MySQL', level: '10%', color: '#00758f', desc: 'Relational DB' }
    ],
    tools: [
      { name: 'VS Code / Cursor', level: '100%', color: '#007acc', desc: 'Development' },
      { name: 'Git / GitHub', level: '90%', color: '#f05032', desc: 'Version Control' },
      { name: 'Figma / Adobe XD', level: '75%', color: '#f24e1e', desc: 'UI/UX Design' },
      { name: 'Postman / Swagger', level: '45%', color: '#ff6c37', desc: 'API Testing' }
    ]
  }

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='abilities' className='default-box p-8 sm:p-0'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h3 className={`universal-title_description ${dayNight ? 'universal-title_description--Light' : ''}`}>
          {!language ? 'Stack Tecnológico' : 'Technical Stack'}
        </h3>

        <div className={`mt-8 p-6 rounded-lg border border-skyblue/20 bg-[#112240] ${dayNight ? 'bg-[#1e3a5f]' : ''}`}>
        <div className='text-center'>
          <h4 className={`text-lg font-semibold mb-4 text-skyblue`}>
            {!language ? 'Mi Enfoque de Desarrollo' : 'My Development Approach'}
          </h4>
          <div className='max-w-4xl mx-auto'>
            <p className={`text-sm leading-relaxed text-pText ${dayNight ? 'text-pTextLight' : ''}`}>
              {!language
                ? 'Las tecnologías que muestro en mi perfil son las que utilizo con mayor frecuencia. Sin embargo, en un entorno con múltiples lenguajes y herramientas, priorizo el dominio de los fundamentos y la capacidad de resolver problemas reales.'
                : 'The technologies I show in my profile are the ones I use most frequently. However, in a multi-language environment, I prioritize the mastery of fundamentals and the ability to solve real problems.'
              }
            </p>
            <p className={`text-sm leading-relaxed text-pText mt-3 ${dayNight ? 'text-pTextLight' : ''}`}>
              {!language
                ? 'Conceptos como condicionales, bucles, arreglos o variables existen en todos los lenguajes; lo importante es comprender su lógica más allá de la sintaxis.'
                : 'Concepts like conditionals, loops, arrays or variables exist in all languages; what is important is to understand their logic beyond the syntax.'
              }
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Navigation */}
      <div className='flex justify-center mb-8 sm:mb-0'>
        <div className='flex gap-2 p-1 bg-[#112240] rounded-lg border border-skyblue/20'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 text-sm sm:px-1 sm:gap-0 ${
                activeCategory === category.id
                  ? 'bg-skyblue text-[#0a192f] font-semibold'
                  : 'text-pText hover:text-skyblue hover:bg-[#1e3a5f]'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className='flex flex-wrap  gap-3  w-full justify-center items-center '>
        {skillsData[activeCategory].map((skill, index) => (
          <div
            key={index}
            className={`bg-[#112240] rounded-lg p-3 border border-skyblue/10 hover:border-skyblue/30 transition-all duration-300 aspect-square flex flex-col justify-between h-40 xsm:w-full xsm:h-28 ${
              dayNight ? 'bg-[#1e3a5f]' : ''
            }`}
          >
            {/* Skill Header */}
            <div className='text-center'>
              <div
                className='w-2 h-2 rounded-full mx-auto mb-2'
                style={{ backgroundColor: skill.color }}
              />
              <h4 className='text-xs font-semibold text-titleText mb-1'>{skill.name}</h4>
              <p className='text-xs text-pText opacity-80'>{skill.desc}</p>
            </div>

            {/* Progress */}
            <div className='mt-auto'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-xs text-skyblue font-medium'>{skill.level}</span>
              </div>
              <div className='w-full bg-[#0a192f] rounded-full h-1'>
                <div
                  className='h-1 rounded-full transition-all duration-1000'
                  style={{
                    width: skill.level,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 6px ${skill.color}40`
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}

    </section>
  )
}

export default Abilities
