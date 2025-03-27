import React from 'react';

const Header = () => {

    return (
        <div className='flex box-border'>
            <div className='flex-1'>
                <p className='
                text-4xl
                font-bold
                bg-gradient-to-r from-azul-style from-0%  via-white via-30% to-white to-100%
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
                <a className='hover:text-violeta-style' href="#">Inicio</a>
                <a className='hover:text-violeta-style' href="#">Servicios</a>
                <a className='hover:text-violeta-style' href="#">Sobre mi</a>
                <a className='hover:text-violeta-style' href="#">Contactame</a>
            </nav>
            <div className=' flex-1' />


        </div>
    )
}


export { Header }