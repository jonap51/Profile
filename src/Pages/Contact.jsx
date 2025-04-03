import React from 'react';
import '../components/ImagePath.css';

const Contact = () => {
    return (
        <section className='m-20 bg-violeta-oscuro-style p-8'>
            <div className='flex'>

                <div className='flex-1 justify center items-center'>
                    <h3 className='font-[CD-Semibold] text-white text-6xl'>
                        ¿Quieres
                        <span className='text-verde-style'> trabajar </span>
                        conmigo? Por favor
                        <span> sientete libre </span>
                        de contactar conmigo.
                    </h3>
                </div>
                <div className='flex-1 border-2 border-white ' >
                    
                    <form action="form" className='bg-white'>
                        <input type="text" className='border-2' />
                        <textarea name="" id=""> Ingresa</textarea>

                    </form>

                </div>
                <div className='absolute rayo bg-red-600'></div>


            </div>

        </section>

    )
}

export { Contact }