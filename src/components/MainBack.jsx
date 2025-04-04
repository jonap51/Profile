import React from 'react';

const MainBack = () => {
    return (
        <div className='w-screen h-[calc(100vh-7em)] '>
            { /**Color Verde*/}
            <div className='absolute z-30
            -right-10 -bottom-60
            size-120 rounded-full 
            bg-verde-style  blur-[150px]
            animate-pulse'/>

            { /**Color Violeta */}
            <div className='absolute z-20 
            left-20 top-50 
            w-150 h-80 rounded-full
            bg-violeta-style  blur-[150px]
            animate-pulse'/>


            <p className='h-full w-full flex
            justify-center items-center
            font-[CD-Medium] font-bold text-[150px] text-white
            blur-[5px] opacity-20  '>
                Scilicet Developer
            </p>


        </div>
    )
}

export { MainBack }