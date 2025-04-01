import React from 'react';

const Header = () => {

    return (
        <div className='flex justify-center '>
            <div className='flex w-[calc(100vw-20em)]'>

                <div className='flex-1  pt-8'>
                    <p className='text-4xl font-[CD-SemiBold] text-transparent bg-clip-text
                bg-gradient-to-r from-azul-style from-0%  via-white via-40% to-white to-100%'>
                        Jonatan Paez
                    </p>
                </div>
                <nav className='flex flex-1 justify-around items-end text-white font-archivo font-bold text-base'>
                    <a className='hover:text-azul-style' href="#">Inicio</a>
                    <a className='hover:text-azul-style' href="#">Servicios</a>
                    <a className='hover:text-azul-style' href="#">Sobre mi</a>
                    <a className='hover:text-azul-style' href="#">Contactame</a>
                </nav>

                <div className=' flex-1' />

            </div>



        </div>
    )
}


export { Header }