import React from 'react';

const CardProjects = () => {
    return (
        <div className='flex-col w-1/2 h-1/2 m-8'>
            <div className='w-100 h-100  border-2 bg-black rounded-[50px]'>
            </div>
            <div className='my-8 flex-col font-archivo  '>
                <p className=' text-violeta-style text-lg font-bold mt-3'>
                    Fecha:
                </p>
                <h2 className='my-3 font-[CD-Semibold] text-2xl'>
                    Titulo:
                </h2>
                <p className='text-xl text-gray-600'>
                    descripción
                </p>
            </div>

        </div>
    )
}

export { CardProjects }