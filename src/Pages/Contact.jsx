import React from 'react'
import '../components/ImagePath.css'
import { ContactForm } from '../components/ContactForm'
import { Element } from 'react-scroll'

const Contact = () => {
  return (
    <Element name='contactame'>
      <section className='relative flex bg-violeta-oscuro-style p-8 sm:p-16 md:p-30 mt-10 md:mt-20 overflow-hidden'>
        <div className='flex flex-col md:flex-row w-full min-h-[auto] md:h-100 justify-center items-center gap-8 md:gap-0'>
          <div className='flex w-full md:w-1/2 z-1'>
            <h3
              className='font-[CD-Semibold] leading-[1.4]
 text-white text-3xl sm:text-4xl md:text-6xl'
            >
              ¿Quieres
              <span className='text-verde-style'> trabajar </span>
              conmigo? Por favor,
              <span className='text-verde-style'>
                {' '}
                siéntete libre{' '}
              </span>
              de contactarme.
            </h3>
          </div>

          <div className='w-full md:w-1/2 md:ms-10 bg-white rounded-4xl border-red z-1'>
            <ContactForm />
          </div>
        </div>
        <img
          className='absolute opacity-50 -top-20 -left-20 w-50 h-50 md:w-75 md:h-75'
          src='./img/estrella.svg'
          alt='image svg'
        />
        <div className='hidden md:block rayo absolute bg-violeta-style/50 left-215 bottom-0' />
        <div className='hidden md:block rombos-imagen absolute bg-azul-oscuro-style -right-5 -top-2' />
      </section>
    </Element>
  )
}

export { Contact }
