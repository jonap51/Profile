import React from 'react';

const AboutMe = () => {
    return (
        <div className='m-20'>
            <div className='flex p-15 justify-center text-6xl font-[CD-Semibold] bg-white'>
                Herramientas que utilizo
            </div>

            <div className='flex justify-evenly p-8'>
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
            </div>
            { /**Contenedor -Verde- */}
            <div className='flex justify-between p-8 bg-verde-style  rounded-4xl '>
                { /**Izquierda del Contenedor */}
                <div className='flex-2  p-8 '>
                    <div>
                        <h2 className='text-[65px]/18 pb-8 font-[CD-Semibold]'>
                            Brindando 14 años de excelencia
                        </h2>
                    </div>
                    <div className='text-xl font-archivo '>
                        <p>14 años trabajando en laboratorios de creación y desarrollo de fragancias, donde se necesita enfoque, precisión, ser metódico y organizado, pensar en el cliente, basarse en datos, resolución de problemas, comunicación, todo eso y más tengo para ofrecer al mundo. Mi pasión por la tecnología hace que esté en constante movimiento, aprendiendo , mejorando, puliendo mis habilidades  </p>
                    </div>
                    <div className='mt-8'>
                        <button className='rounded-full border-2 py-3 px-8 font-archivo'>
                            Conoce más
                        </button>
                    </div>

                </div>
                {/**Derecha del contenerdo */}
                <div className=' flex-1 border-2  flex-col'>

                    <div className='flex justify-center h-1/2 '>
                        <img src="/vite.svg" alt="" />
                    </div>
                    <div className='flex justify-evenly h-1/2 '>
                        <img className='w-1/2 h-full' src="/vite.svg" alt="" />
                        <img className='w-1/2 h-full' src="/vite.svg" alt="" />
                    </div>

                </div>

            </div>

        </div>



    )
}

export { AboutMe }