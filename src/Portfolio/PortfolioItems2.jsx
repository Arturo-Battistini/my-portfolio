/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import '../index.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { Contexto } from '../Contexto/index'
import { Link } from 'react-router-dom'
import { Gith2 } from '../Icons/Icons'

const PortfolioItems = ({ pDirection, rowDirection, titleDirection, tecDirection, proyect, tech, tech2, tech3, appLink, appLink2, appLink3, pfDescription, pfDescriptionEn, apptitle, apptitleEn }) => {
  const { language } = useContext(Contexto)
  return (

    <div className={`Portfolio-items_container flex justify-center items-center ${rowDirection} sm:block sm:relative sm:h-[300px]
      `}>

      <div className='portfolio-items_img-container w-[60%] sm:w-full bg-skyblue rounded-lg sm:h-full '>
        <Link to={appLink} target='_blank'>
          <picture className='rounded-md'>
            <video src={proyect} autoPlay loop muted playsInline className='opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-md sm:h-full object-cover sm:brightness-[.1]'></video>
          </picture>
        </Link>
      </div>

      <div className={`portfolio-items_txt-container w-1/2 flex flex-col gap-2 sm:gap-0 sm:p-5  ${titleDirection}
          sm:absolute sm:top-0 sm:w-full sm:h-full sm:bg-[#112240b3] sm:justify-center sm:gap-2`}>
        <div className='portfolio-title_container sm:text-left'>
          <p className='mini-title mb-2 text-xs sm:bg-transparent  sm:left-0 '>
            {!language ? 'Proyecto realizado' : 'Completed project'}
          </p>
          <h3 className='portfolio-title'>
            {!language ? apptitle : apptitleEn }
          </h3>
        </div>
        <div className='portfolio-content bg-[#112240] sm:bg-transparent  '>
          <p className={`text-pText  w-[100%] bg-[#112240] sm:bg-transparent h-full  rounded-sm sm:p-1 ${pDirection}`}>
            {!language ? pfDescription : pfDescriptionEn}
          </p>
        </div>

        <div className={`portfolio-tecnology_applicated  text-pText text-xs flex flex-col gap-1 sm:items-start ${tecDirection}`} >

          <ul className='tecnologies flex justify-between gap-3 mt-3'>
            <li className='aboutme-item text-xs  before:content-["▹"]'>{tech}</li>
            <li className='aboutme-item text-xs  before:content-["▹"]'>{tech2}</li>
            <li className='aboutme-item text-xs  before:content-["▹"]'>{tech3}</li>

          </ul>

          <ul className='portfolio-share flex gap-2 justify-between'>
            <Gith2 link={appLink2} />
            <Link to={appLink} target='_blank' className='hover:fill-skyblue transition-all duration-200 ease-in hover:scale-110 h-full'>
              <EyeIcon className=' w-5 h-5 fill-pText max-w-[18px] cursor-pointer hover:fill-skyblue transition-all duration-300' data-aos="fade-right" data-aos-delay="300" />
            </Link>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default PortfolioItems
