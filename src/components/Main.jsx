import React from 'react'
import { MainBack } from './MainBack'
import { MainFront } from './MaintFront'

const Main = () => {
  return (
    <div className='flex justify-center mt-24 md:mt-20 items-center w-full h-full relative'>
      {/* Capa Frontal */}
      <div className='absolute top-0 md:top-5 z-40 w-full'>
        <MainFront />
      </div>
      {/* Capa Trasera */}
      <div className='absolute inset-0 overflow-hidden'>
        <MainBack />
      </div>
      {/* Foto Central - oculta en móvil, visible desde md */}
      <img
        className='hidden md:block object-cover md:w-1/2 h-full z-20'
        src='img/gimp-canvas-proom.webp'
        alt='desarrollador sonriendo'
      />
    </div>
  )
}

export { Main }
