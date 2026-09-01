import React, { useMemo } from 'react'
import '../components/ImagePath.css'
import { Element } from 'react-scroll'

const AboutMe = () => {
  const tools = [
    { name: 'Vite', image: 'vite.svg' },
    { name: 'React', image: 'https://skillicons.dev/icons?i=react' },
    { name: 'C#', image: 'https://skillicons.dev/icons?i=cs' },
    { name: 'Unity', image: 'https://skillicons.dev/icons?i=unity' },
    { name: 'Css', image: 'https://skillicons.dev/icons?i=css' },
    { name: 'Tailwind', image: 'https://skillicons.dev/icons?i=tailwind' },
    {
      name: 'Bootstrap',
      image: 'https://skillicons.dev/icons?i=bootstrap'
    },
    { name: 'Html', image: 'https://skillicons.dev/icons?i=html' },
    { name: 'JavaScript', image: 'https://skillicons.dev/icons?i=js' },
    { name: 'Git', image: 'https://skillicons.dev/icons?i=git' },
    { name: 'Firebase', image: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'Figma', image: 'https://skillicons.dev/icons?i=figma' }
  ]

  const duplicatedTools = useMemo(() => {
    return [...tools, ...tools]
  }, [tools])

  return (
    <div className='mx-4 sm:mx-10 md:mx-30 my-10 md:my-20 relative'>
      <div className='flex justify-center text-3xl sm:text-5xl md:text-6xl font-[CD-Semibold] bg-white text-center'>
        Herramientas que utilizo
      </div>
      {/* Contenedor de la marquesina */}
      <div className='marquee-window py-10 md:py-20'>
        <div className='marquee-content whitespace-nowrap'>
          {duplicatedTools.map((tool, index) => (
            <img
              key={index}
              src={tool.image}
              alt={tool.name}
              className='h-[3em] w-[3em] md:h-[4.5em] md:w-[4.5em] mx-4 md:mx-8 flex-shrink-0'
            />
          ))}
        </div>
      </div>

      {/** Contenedor -Verde- */}
      <Element name='sobreMi'>
        <div className='relative flex flex-col md:flex-row justify-between my-10 md:my-20 p-5 md:p-8 bg-verde-style/40 overflow-clip rounded-4xl'>
          {/** Img Path */}
          <div className='hidden md:block absolute bg-verde-oscuro-style -bottom-5 right-139 rombos-imagen' />

          {/** Izquierda del Contenedor */}
          <div className='flex-2 px-2 md:px-8'>
            <div>
              <h2 className='text-4xl md:text-[65px]/18 mb-5 md:mb-8 font-[CD-Semibold]'>
                Enfocado en la excelencia
              </h2>
            </div>
            <div className='text-base md:text-xl font-archivo pb-5'>
              <p>
                Con 14 años de experiencia en un laboratorio de
                creación y desarrollo de fragancias, he
                cultivado habilidades fundamentales que ahora
                aporto al desarrollo front-end:
                <br />
                - Precisión y atención al detalle.
                <br />
                - Enfoque centrado en el cliente, traduciendo
                necesidades específicas en soluciones que
                superan expectativas, como interfaces digitales.
                <br />
                - Metodología basada en datos para la toma de
                decisiones, aplicando análisis cuantitativo para
                optimizar experiencias de usuario.
                <br />- Capacidad para resolver problemas
                complejos de manera organizada y metódica,
                desglosando desafíos en componentes manejables.
              </p>
            </div>
            <div className='mt-6 md:mt-8'>
              <a
                className='rounded-full border-2 border-violeta-oscuro-style py-3 px-6 md:py-4 md:px-8 text-lg md:text-xl font-semibold font-archivo
                          hover:bg-black hover:text-white transition duration-200 ease-in'
                href='https://www.linkedin.com/in/jonatan-paez/'
                target='blank'
                rel='noopener noreferrer'
              >
                Conoce más
              </a>
            </div>
          </div>

          {/** Derecha del contenedor - oculto en mobile */}
          <div className='hidden md:flex flex-col justify-center items-center z-1 flex-1 h-120 w-100 overflow-hidden mt-6 md:mt-0'>
            <div className='flex items-center justify-center h-1/2 w-full p-4'>
              <img
                className='rounded-xl object-cover w-full h-full'
                src='img/img-1.webp'
                alt='persona de espalda escribiendo código y con una remera que dice react'
              />
            </div>
            <div className='flex justify-evenly h-1/2 w-full gap-x-10 p-4'>
              <img
                className='rounded-xl object-cover w-1/2 h-full'
                src='img/img-2.webp'
                alt='persona con 3 monitores y se ven árboles desde la ventana'
              />
              <img
                className='rounded-xl object-cover w-1/2 h-full'
                src='vite.svg'
                alt='imagen de simulación 3'
              />
            </div>
          </div>
        </div>
      </Element>
    </div>
  )
}

export { AboutMe }
