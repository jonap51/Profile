import React from 'react'
import { MainBack } from './MainBack'
import { MainFront } from './MaintFront'

const Main = () => {
  return (
    <div className='flex justify-center mt-24 xl:mt-20 items-center w-full h-full relative'>
      {/* Capa Frontal */}
      <div className='absolute top-0 xl:top-5 z-40 w-full'>
        <MainFront />
      </div>
      {/* Capa Trasera */}
      <div className='absolute inset-0 overflow-hidden'>
        <MainBack />
      </div>
      {/* Foto Central - oculta en móvil/tablet, visible en escritorio */}
      <img
        className='hidden xl:block object-cover xl:w-1/2 h-full z-20'
        src={`${import.meta.env.BASE_URL}img/gimp-canvas-proom.webp`}
        alt='desarrollador sonriendo'
      />
    </div>
  )
}

export { Main }
