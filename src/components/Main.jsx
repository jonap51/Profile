import React from 'react'
import { MainBack } from './MainBack'
import { MainFront } from './MaintFront'

const Main = () => {
  return (
    <div className='flex justify-center mt-16 md:mt-20 items-center w-full h-full relative'>
      {/* Capa Frontal */}
      <div className='absolute top-0 md:top-5 z-40 w-full'>
        <MainFront />
      </div>
      {/* Capa Trasera */}
      <div className='absolute'>
        <MainBack />
      </div>
      {/* Foto Central */}
      <img
        className='object-cover w-3/4 sm:w-2/3 md:w-1/2 h-full z-20'
        src='img/gimp-canvas-proom.webp'
        alt='desarrollador sonriendo'
      />
    </div>
  )
}

export { Main }
