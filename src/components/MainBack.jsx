import React from 'react';

const MainBack = () => {
    return (
        <div className='w-screen h-[calc(100vh-7em)]'>

            <div className='absolute z-40
            -right-10 -bottom-40
            size-120 rounded-full 
            bg-verde-style blur-[100px]'/>


            <div className='absolute z-20 
            left-20 top-50 
            w-150 h-80 rounded-full
            bg-violeta-style  blur-[150px]'/>


            <p className='h-full w-full flex
            justify-center items-center
            font-[CD-Medium] font-bold text-[150px] text-white
            blur-[5px] opacity-20'>
                Scilicet Developer
            </p>


        </div>
    )
}

export { MainBack }