import React, { useContext } from 'react'
import PortfolioItems from './PortfolioItems'
import PortfolioItemsDetailed from './PortfolioItemsDetailed'
import plantilla from '../assets/plantilla.png'
import { Contexto } from '../Contexto/index'
import Todoapp from '../assets/tl.png'
import bolton from '../assets/bolton.png'
import f1 from '../assets/f1.png'
import computecnica from '../assets/computecnica.png'
import microtom from '../assets/microtom.png'
import dev from '../assets/dev.mp4'
import NewsPage from '../assets/News.png'
import PortfolioItems2 from './PortfolioItems2'
const Portfolio = () => {
  const { language, dayNight } = useContext(Contexto)

  const musicProducerContent = {
    es: {
      mainDescription: "Plataforma integral para gestión de eventos musicales y producción audiovisual.",
      features: [
        "Gestión completa de usuarios y roles",
        "Reproducción de archivos de audio y video",
        "Calendario inteligente para programación de shows",
        "Módulo financiero con ingresos, egresos y balances",
        "Portal de bloqueo de horarios",
        "Generación de reportes CSV y facturación mensual"
      ],
      highlights: [
        "Sistema de asignación automática de shows",
        "Gestión de múltiples escenarios y horarios",
        "Subida de boletas y facturas por usuarios y contadores"
      ]
    },
    en: {
      mainDescription: "Comprehensive platform for musical event management and audiovisual production.",
      features: [
        "Complete user and role management",
        "Audio and video file playback",
        "Smart calendar for show scheduling",
        "Financial module with income, expenses and balances",
        "Schedule blocking portal",
        "CSV report generation and monthly billing"
      ],
      highlights: [
        "Automatic show assignment system",
        "Multiple stages and time slots management",
        "Receipt and invoice upload by users and accountants"
      ]
    }
  }

  const formula1Content = {
    es: {
      mainDescription: "Creado para usar todas las bondades de Angular 20, usando una API propia aplico todos los conocimientos que tengo en angulular antiguo y ahora moderno. esto es netamente para reclutadores y personas que quieren saber como me manejo en este framework.",
      features: [
        "Uso de Signals, Computed y Effect",
        "Implementé arquitectura zoneless en Angular 20, eliminando la dependencia de Zone.js para optimizar rendimiento y reducir el bundle size, utilizando signals reactivos para detección de cambios manual y mejor control de actualizaciones de UI.",
        "Arquitectura Modular:",
        {
          featureSub: [
            "Componentes standalone con inyección de dependencias",
            "Servicios singleton para gestión de estado global",
            "Interfaces TypeScript para tipado fuerte"
          ]
        },
        "Optimización de Rendimiento:",
        {
          featureSub: [
            "Sistema de caché con invalidación automática",
            "Lazy loading de componentes",
            "Signals reactivos para actualizaciones eficientes"
          ]
        }
      ],
      highlights: [
        "Arquitectura zoneless con signals reactivos (40% reducción bundle)",
        "Sistema de guards para navegación segura",
        "Caché inteligente para optimización de APIs",
        "Integración con F1 API oficial en tiempo real"
      ]
    },
    en: {
      mainDescription: "Created to use all the benefits of Angular 20, using my own API I apply all the knowledge I have in old Angular and now modern. This is purely for recruiters and people who want to know how I handle myself in this framework.",
      features: [
        "Use of Signals, Computed and Effect",
        "I implemented zoneless architecture in Angular 20, eliminating the Zone.js dependency to optimize performance and reduce bundle size, using reactive signals for manual change detection and better control of UI updates.",
        "Modular Architecture:",
        {
          featureSub: [
            "Standalone components with dependency injection",
            "Singleton services for global state management",
            "TypeScript interfaces for strong typing"
          ]
        },
        "Performance Optimization:",
        {
          featureSub: [
            "Cache system with automatic invalidation",
            "Lazy loading of components",
            "Reactive signals for efficient updates"
          ]
        }
      ],
      highlights: [
        "Zoneless architecture with reactive signals (40% bundle reduction)",
        "Guards system for secure navigation",
        "Smart cache for API optimization",
        "Real-time integration with official F1 API"
      ]
    }
  }

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='portfolio' className='portfolio default-box   '>
      <div className='universal-title-description__container w-full mb-10  '>
        <h3 className={`universal-title_description ${dayNight ? 'universal-title_description--Light' : ''} `}>
          {!language ? 'Portafolio' : 'Portfolio'}
        </h3>

      </div>
      <section className='portfolio-container flex flex-col gap-[100px]'>
        <PortfolioItemsDetailed
          apptitle={'Productora musical'}
          apptitleEn={'Music Producer'}
          proyect={bolton}
          appLink={''}
          title={'Características Principales'}
          titleEn={'Key Features'}
          pDirection={'pl-10 py-3 relative right-10 text-right sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-right'}
          tecDirection={'items-end'}
          tech={'Angular 18'}
          tech1={'Typescript'}
          tech2={'Sass'}
          tech3={'Express'}
          tech4={'Node.js'}
          tech5={'Firebase'}
          pfDescription={''}
          pfDescriptionEn={''}
          simbolDirection={'flex-row-reverse'}
          content={musicProducerContent}
        />
        <PortfolioItemsDetailed
          apptitle={'Formula 1'}
          apptitleEn={'Formula 1'}
          proyect={f1}
          appLink={'https://formula1-mauve.vercel.app/teams'}
          appLink2={'https://github.com/Arturo-Battistini/formula1'}
          appLink3={'https://github.com/Arturo-Battistini/f1Api'}
          title={'Algunas cosas implementadas aqui:'}
          titleEn={'Key Features'}
          pDirection={'pr-10 py-3 relative left-10 text-left sm:left-0 sm:right-0 sm:text-left pl-0'}
          titleDirection={'text-left'}
          tecDirection={'items-start'}
          rowDirection={'flex-row-reverse'}
          textDirection={'text-left'}
          tech={'Angular 20'}
          tech1={'Typescript'}
          tech2={'CSS'}
          tech3={'NestJs'}
          tech4={'MongoDB'}
          tech5={'Signals'}
          pfDescription={''}
          pfDescriptionEn={''}
          content={formula1Content}
        />
        <PortfolioItems2
        apptitle={'Mi pagina orientada a negocios'}
        apptitleEn={'My business page'}
        proyect={dev} portfolioImage={plantilla}
        rowDirection={'flex-row-reverse'}
        appLink={'https://abattistini.dev/'}
        appLink2={'https://github.com/Arturo-Battistini/negocios'}
        pDirection={'flex pr-10 py-3 relative left-10 text-left sm:right-0 sm:left-0 sm:text-left pl-0'}
        titleDirection={'text-left'}
        tecDirection={'items-start  '}
        tech={'Angular 19'} tech2={'Sass'} tech3={'Typescript | emailjs'}
        pfDescription={'Mi pagina web orientada a negocios, esta capacitada para enviar correos electronicos a los clientes, y mostrar informacion de la empresa.'}
        pfDescriptionEn={'My business page, it is equipped to send emails to customers, and show information about the company.'}
      />
        <PortfolioItems
          apptitle={'Computecnica'}
          apptitleEn={'Computecnica'}
          proyect={computecnica} portfolioImage={plantilla}
          rowDirection={'flex-row-reverse'}
          appLink={'https://computecnica.cl/'}
          appLink2={''}
          pDirection={'flex pr-10 py-3 relative left-10 text-left sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-left'}
          tecDirection={'items-start  '}
          tech={'React'} tech2={'Vanilla CSS'} tech3={'Vite'}
          pfDescription={'Sitio web estático simple para una empresa de mantenimiento de computadoras.'}
          pfDescriptionEn={'Static website for a computer maintenance company.'}
        />

        <PortfolioItems
          apptitle={'Tienda online'}
          apptitleEn={'Online Store'}
          proyect={microtom} portfolioImage={plantilla}
          appLink={'https://microtom.cl/'}
          pDirection={'pl-10 py-3 relative right-10 text-right sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-right'}
          tecDirection={'items-end'}
          tech={'Wordpress'} tech2={'Vanilla CSS'} tech3={'Divi'}
          pfDescription={'Tienda online de productos de linea blanca, este proyecto esta capacitado para realizar pagos dentro del sitio, inventario, categorias, etc.'}
          pfDescriptionEn={'Online store of white goods products, this project is equipped to make payments within the site, inventory, categories, etc.'}
        />
          <PortfolioItems
            apptitle={'Noticias más recientes'}
            apptitleEn={'Latest News'}
            proyect={NewsPage} portfolioImage={plantilla}
            rowDirection={'flex-row-reverse'}
            appLink={'https://arturo-battistini.github.io/NEWSWEBSITE/'}
            appLink2={'https://github.com/Arturo-Battistini/NEWSWEBSITE'}
            pDirection={'flex pr-10 py-3 relative left-10 text-left sm:right-0 sm:left-0 sm:text-left pl-0'}
            titleDirection={'text-left'}
            tecDirection={'items-start  '}
            tech={'React'} tech2={'Vanilla CSS'} tech3={'News API'}
            pfDescription={'Explorando Noticias: Página Web React, APIs, Arrays, localStorage, Enlaces a Fuentes, Diseños Responsivos, Filtrado.'}
            pfDescriptionEn={'Exploring Latest News: Website Showcasing React Skills, API Usage, Arrays, localStorage for Saving News, Source Links, Responsive Designs, Filtering Titles & Categories.'}
          />
        <PortfolioItems
          apptitle={'Todo List'}
          apptitleEn={'Todo List'}
          proyect={Todoapp} portfolioImage={plantilla}
          appLink={'/todo'}
          appLink2={'https://github.com/Arturo-Battistini/my-portfolio/tree/main/src/Pages/Todo'}
          pDirection={'pl-10 py-3 relative right-10 text-right sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-right'}
          tecDirection={'items-end'}
          tech={'React'} tech2={'Tailwind'} tech3={'Vite'}
          pfDescription={'Una app de lista de tareas: usuario escribe tareas, localStorage guarda listas y opciones de completado, previene pérdida de datos.'}
          pfDescriptionEn={'A small task recording app: user writes tasks, localStorage saves lists and completion options, preventing data loss.'}
        />

      </section>
    </section>
  )
}

export default Portfolio
