import React from 'react';
import { MainBack } from './MainBack';
import { MainFront } from './MaintFront';

const Main = () => {
    return (
        <div className=' flex justify-center items-center w-full  h-full relative '>

            <div className='absolute top-5 z-30'>
                <MainFront />
            </div>

            <MainBack />

            <img
                src='/img/w-k.png '
                className='
                object-cover
                w-1/2        
                h-full
                z-20
                ' />

            <p className='
            absolute
            font-[CD-Medium]
            text-[150px]
            text-white
            blur-[5px]
            opacity-20
            '>
                Scilicet Developer
            </p>

        </div>
    )
}

export { Main }