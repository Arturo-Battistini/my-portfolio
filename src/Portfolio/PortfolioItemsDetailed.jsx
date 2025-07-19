/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import '../index.css'
import { EyeIcon, LockClosedIcon } from '@heroicons/react/24/solid'

import { Contexto } from '../Contexto/index'
import { Link } from 'react-router-dom'
import { Gith2 } from '../Icons/Icons'

// Componente SVG personalizado para proyecto privado
export const PrivateEyeIcon = () => (
  <div className='flex items-center gap-2'>
    <svg className='w-5 h-5 fill-pText max-w-[18px] opacity-60' viewBox='0 0 24 24'>
      {/* Ojo base */}
      <path d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/>
      {/* Línea diagonal (/) */}
      <line x1='3' y1='21' x2='21' y2='3' stroke='currentColor' strokeWidth='2'/>
    </svg>
    <div className='flex items-center gap-1'>
      <LockClosedIcon className='w-3 h-3 fill-pText' />
      <span className='text-pText text-xs opacity-60'>Privado</span>
    </div>
  </div>
)

const PortfolioItemsDetailed = ({ pDirection, rowDirection, titleDirection, tecDirection, proyect, tech, tech2, tech3, tech4, tech5, appLink, appLink2, appLink3, pfDescription, pfDescriptionEn, apptitle, apptitleEn, textDirection, content, title, titleEn, simbolDirection }) => {
  const { language } = useContext(Contexto)

  // El contenido ahora viene por props
  const selectedContent = language ? content.en : content.es

  return (
            <div className={`Portfolio-items_container flex justify-center items-center ${rowDirection} sm:block sm:relative sm:h-auto`}>

      <div className='portfolio-items_img-container w-[60%] sm:w-full bg-skyblue rounded-lg sm:h-full sm:min-h-[420px] sm:relative'>
        {appLink
          ? (
          <Link to={appLink2} target='_blank'>
            <picture className='rounded-md h-full w-full block'>
              <img src={proyect} className='opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-md object-cover w-full h-full sm:absolute sm:inset-0 sm:h-full sm:w-full sm:brightness-[.1]' alt={apptitle} />
            </picture>
          </Link>
            )
          : (
          <picture className='rounded-md h-full w-full block'>
            <img src={proyect} className='opacity-80 transition-opacity duration-300 rounded-md object-cover w-full h-full sm:absolute sm:inset-0 sm:h-full sm:w-full sm:brightness-[.1]' alt={apptitle} />
          </picture>
            )}
      </div>

            <div className={`portfolio-items_txt-container w-1/2 flex flex-col gap-2 sm:gap-0 sm:p-5 ${titleDirection} ${textDirection}
          sm:absolute sm:top-0 sm:left-0 sm:w-full sm:h-full sm:min-h-[420px] sm:max-h-[90vh] sm:bg-[#112240b3] sm:justify-between sm:overflow-y-auto sm:flex sm:flex-col`}>

        <div className='portfolio-title_container sm:text-left'>
          <p className='mini-title mb-2 text-xs sm:bg-transparent sm:left-0'>
            {!language ? 'Proyecto realizado' : 'Completed project'}
          </p>
          <h3 className='portfolio-title'>
            {!language ? apptitle : apptitleEn}
          </h3>
        </div>

        <div className='portfolio-content bg-[#112240] sm:bg-transparent flex-1'>
          <div className={`text-pText w-[100%] bg-[#112240] sm:bg-transparent h-full rounded-sm sm:p-1 ${pDirection}`}>
            {/* Descripción principal */}
            <p className='text-pText leading-relaxed mb-3'>
              {selectedContent.mainDescription}
            </p>

            {/* Características principales */}
            <div className='mb-3'>
              <h4 className='text-skyblue font-semibold text-xs uppercase tracking-wide mb-2'>
                {!language ? title : titleEn}
              </h4>
              <ul className='space-y-1'>
                {selectedContent.features.map((feature, index) => {
                  if (typeof feature === 'string') {
                    return (
                      <li key={index} className={`text-pText text-xs flex items-start  gap-1  ${simbolDirection}`}>
                        <span className={`text-skyblue m-0!important ${rowDirection === 'flex-row-reverse' ? '' : 'rotate-180'}`}>  ▹</span>
                        <span>{feature}</span>
                      </li>
                    )
                  } else {
                    // Si es un objeto con featureSub pero sin text/name, no crear li principal
                    if (feature.featureSub && !feature.text && !feature.name) {
                      return (
                        <React.Fragment key={index}>
                          {feature.featureSub.map((subItem, subIndex) => (
                            <li key={`${index}-${subIndex}`} className='text-pText text-xs flex items-start space-x-2 ml-4'>
                              <span className='text-skyblue'>•</span>
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </React.Fragment>
                      )
                    } else {
                      return (
                        <React.Fragment key={index}>
                          <li className='text-pText text-xs flex items-start space-x-2'>
                            <span className='text-skyblue mt-1'>▹</span>
                            <span>{feature.text || feature.name}</span>
                          </li>
                          {feature.featureSub && feature.featureSub.map((subItem, subIndex) => (
                            <li key={`${index}-${subIndex}`} className='text-pText text-xs flex items-start space-x-2 ml-4'>
                              <span className='text-skyblue mt-1'>•</span>
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </React.Fragment>
                      )
                    }
                  }
                })}
              </ul>
            </div>

            {/* Destacados */}
            <div className='bg-[#0a192f] p-3 rounded-sm border-l-2 border-skyblue'>
              <h4 className='text-skyblue font-semibold text-xs uppercase tracking-wide mb-2'>
                {!language ? 'Destacados' : 'Highlights'}
              </h4>
              <ul className='space-y-1'>
                {selectedContent.highlights.map((highlight, index) => (
                  <li key={index} className={`text-pText text-xs flex items-start gap-1 ${simbolDirection}`}>
                    <span className='text-skyblue'>•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`portfolio-tecnology_applicated text-pText text-xs flex flex-col gap-1 sm:items-start ${tecDirection}`}>

          <ul className='tecnologies flex justify-between gap-3 mt-3'>
            <li className='aboutme-item text-xs before:content-["▹"]'>{tech}</li>
            <li className='aboutme-item text-xs before:content-["▹"]'>{tech2}</li>
            <li className='aboutme-item text-xs before:content-["▹"]'>{tech3}</li>
            <li className='aboutme-item text-xs before:content-["▹"]'>{tech4}</li>
            <li className='aboutme-item text-xs before:content-["▹"]'>{tech5}</li>

          </ul>

          <ul className='portfolio-share flex gap-2 justify-between'>
            {appLink3 && <Gith2 link={appLink3} />}
            {appLink2 && <Gith2 link={appLink2} />}
            {appLink
              ? (

              <Link to={appLink} target='_blank' className='hover:fill-skyblue transition-all duration-200 ease-in hover:scale-110 h-full'>
                <EyeIcon className='w-5 h-5 fill-pText max-w-[18px] cursor-pointer hover:fill-skyblue transition-all duration-300' data-aos="fade-right" data-aos-delay="300" />
              </Link>
                )
              : (
              <div className='cursor-not-allowed'>
                <PrivateEyeIcon />
              </div>
                )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItemsDetailed
