import React from 'react';

const MainFront = () => {

    return (

        <div className=' w-[calc(100vw-10em)] h-[calc(100vh-7em)]'>
            <div className='flex h-3/5'>
                <p className='
                items-center
                w-2/3
                flex
                text-white
                font-[CD-Bold]
                text-8xl
                border-2'>
                    Soy
                    <br />
                    Jonatan Paez
                </p>
                <p className='flex 
                items-center 
                w-1/3 
                text-white
                font-archivo
                text-2xl
                border-2'>
                    Imaginación que vuela,
                    <br />desarrolo que nace
                </p>
            </div>
            <div className='flex h-2/5'>
                <div className='
                flex
                justify-center
                items-center
                border-red-600
                border-3
                w-2/5
                '>


                    <div className='blur bg-gray-100 opacity-20 h-40 w-sm rounded-3xl'></div>

                    <div className='flex max-w-sm h-40 rounded-3xl bg-transparent absolute  shadow-xl'>
                        <div className="px-6 py-3 z-70">
                            <div className='flex justify-between items-center pb-2'>
                                <div className="font-[CD-SemiBold] text-3xl text-white mb-2">Habilidades</div>
                                {/*Icono*/}
                                <div className='flex size-13 bg-white justify-center items-center rounded-full '>
                                    <span className='material-icons-round z-30'
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


                <p className='
                flex
                items-center
                w-3/5
                text-white
                 font-[CD-Bold]
                text-8xl
                border-2'>
                    Desarrollador
                    <br />Web
                </p>

            </div>
        </div>

    )
}

export { MainFront }