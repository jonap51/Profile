import React from 'react'
import { CardProjects } from '../components/CardProjects'
import { Element } from 'react-scroll'

const Proyects = () => {
  return (
    <section className='mx-4 sm:mx-10 md:mx-30'>
      <Element name='proyectos'>
        <div>
          <div className='text-4xl md:text-[65px]/18 pb-5 md:pb-8 font-[CD-Semibold]'>
            <h2>Mis proyectos</h2>
          </div>
          <div className='flex gap-3 md:gap-0'>
            <button className='rounded-full bg-gray-200 py-2 px-5 md:py-3 md:px-8 font-archivo me-4 md:me-8'>
              All
            </button>
            <button className='rounded-full bg-gray-200 py-2 px-5 md:py-3 md:px-8 font-archivo'>
              Website
            </button>
          </div>

          <div className=''>
            <CardProjects />
          </div>
        </div>
      </Element>
    </section>
  )
}

export { Proyects }
