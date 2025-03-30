import React from 'react';
import './MainFront.css';

const MainFront = () => {

    return (

        <div className=' w-[calc(100vw-20em)] h-[calc(100vh-7em)]'>
            <div className='flex h-3/5'>
                <p className=' pt-8 w-2/3 flex text-white font-[CD-Bold] text-8xl'>
                    Soy
                    <br />
                    Jonatan Paez
                </p>
                <p className='flex items-center w-1/3 text-white font-archivo text-2xl'>
                    Imaginación que vuela,
                    <br />desarrolo que nace
                </p>
            </div>
            <div className='flex h-2/5'>
                <div className='relative z-20 flex justify-center items-center w-2/5'>
                    <div className='w-sm h-40 blur-xs rounded-[20px] bg-white opacity-10 absolute  -z-50' />
                    <div className='flex max-w-sm h-40 marco '>
                        <div className="px-6  py-3  ">
                            <div className='flex justify-between items-center pb-2'>
                                <div className="font-[CD-SemiBold] text-3xl text-white mb-2">Habilidades</div>
                                {/*Icono*/}
                                <div className='flex size-13 bg-white justify-center items-center rounded-full '>
                                    <span className='material-icons-round'
                                        style={{ fontSize: '35px' }} >
                                        call_made
                                    </span>
                                </div>
                            </div>
                            <p className='text-white font-archivo'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
                            </p>
                        </div>
                    </div>

                </div>

                <p className='flex justify-center items-center w-3/5 text-white font-[CD-Bold] text-8xl'>
                    Desarrollador
                    <br />Web
                </p>
            </div>
        </div>

    )
}

export { MainFront }