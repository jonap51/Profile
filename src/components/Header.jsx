import React from 'react';

const Header = () => {

    return (
        <div className='flex '>
            <div className='flex justify-center pt-8 flex-1 '>
                <p className='
                text-4xl
                font-[CD-SemiBold]
                bg-gradient-to-r from-azul-style from-0%  via-white via-20% to-white to-100%
                text-transparent
                bg-clip-text'>
                    Jonatan Paez
                </p>
            </div>
            <nav className='
            flex 
            flex-1 
            justify-around 
            items-end
            text-white 
            font-archivo
            font-bold
            text-base'>
                <a className='hover:text-azul-style' href="#">Inicio</a>
                <a className='hover:text-azul-style' href="#">Servicios</a>
                <a className='hover:text-azul-style' href="#">Sobre mi</a>
                <a className='hover:text-azul-style' href="#">Contactame</a>
            </nav>
            <div className=' flex-1' />


        </div>
    )
}


export { Header }