import React from 'react';

const Header = () => {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <p>
                    Jonatan
                </p>
            </div>
            <nav className='flex-2'>
                <a href="#">Inicio</a>
                <a href="#">Servicios</a>
                <a href="#">Sobre mi</a>
                <a href="#">contactame</a>
            </nav>

        </div>
    )
}

export { Header }