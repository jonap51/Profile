import React from 'react'
import './MainFront.css'

const MainFront = () => {
  return (
    <div className='w-full md:w-[calc(100vw-20em)] mx-auto h-auto md:h-[calc(100vh-7em)] pt-8 px-4 md:px-0'>
      {/* Fila superior: nombre + tagline */}
      <div className='flex flex-col md:flex-row h-auto md:h-3/5'>
        <p className='p-4 md:py-8 md:pr-8 md:pl-0 w-full md:w-2/3 text-white font-[CD-SemiBold] text-5xl sm:text-6xl md:text-8xl'>
          Soy
          <br />
          Jonatan Paez
        </p>
        <p className='px-4 pb-4 md:flex md:items-center w-full md:w-1/3 text-white font-archivo text-lg md:text-2xl'>
          Cada Pixel Un Latido,
          <br />
          Un Mundo Digital Se Crea
        </p>
      </div>

      {/* Fila inferior: card + título */}
      <div className='flex flex-col md:flex-row h-auto md:h-2/5 gap-6 md:gap-0 mt-4 md:mt-0'>
        {/* Card Profesional */}
        <div className='flex justify-center w-full md:w-1/2'>
          {/* Wrapper único que define el tamaño — blur y contenido heredan de aquí */}
          <div className='relative w-xs md:w-md h-40 md:h-45 marco overflow-hidden'>
            {/** Capa Blur — absolute inset-0 siempre igual al padre */}
            <div className='absolute inset-0 overflow-hidden rounded-[20px]'>
              {/* Borde luminoso */}
              <div className='absolute marco-de-luz inset-0'>
                <div className='absolute -top-38 -right-7 h-[500px] w-[500px] bg-conic-67 from-transparent via-transparent via-90% to-white animate-[spin_6s_linear_infinite] -scale-x-100' />
              </div>
              {/** Blur */}
              <div className='h-full w-full bg-white/10 backdrop-blur-md' />
            </div>
            {/** Contenido — relative z-10 encima del blur */}
            <div className='relative z-10 px-4 md:px-6 py-3 h-full flex flex-col justify-between'>
              <div className='flex justify-between items-center'>
                <div className='font-[CD-SemiBold] text-xl md:text-3xl text-white mb-2'>
                  Profesional
                </div>
                {/* Icono */}
                <div className='flex size-10 md:size-13 bg-white justify-center items-center rounded-full'>
                  <span
                    className='material-icons-round'
                    style={{ fontSize: '28px' }}
                  >call_made
                  </span>
                </div>
              </div>
              <p className='text-white font-archivo pt-2 text-sm md:text-base'>
                Transformo ideas en experiencias web funcionales
                y atractivas. Me apasiona crear interfaces que
                cautivan y mejoran la interacción del usuario
              </p>
            </div>
          </div>
        </div>

        {/* Título desarrollador */}
        <p className='flex items-center md:items-end justify-center w-full md:w-1/2 text-white font-[CD-SemiBold] text-4xl sm:text-5xl md:text-8xl text-center md:text-left pb-4 md:pb-0'>
          Desarrollador
          <br /> Front End
        </p>
      </div>
    </div>
  )
}

export { MainFront }
