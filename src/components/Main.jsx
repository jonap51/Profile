import React from 'react';
import { MainBack } from './MainBack';
import { MainFront } from './MaintFront';

const Main = () => {
    return (
        <div className=' flex justify-center items-center w-full  h-full relative '>

            <div className='absolute top-5 z-40'>
                <MainFront />
            </div>

            <div className='absolute'>
                <MainBack />
            </div>


            <img className='object-cover w-1/2 h-full z-20'
                src='/img/w-k.png ' />
        </div>
    )
}

export { Main }