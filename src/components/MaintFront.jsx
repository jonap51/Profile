import React from 'react';

const MainFront = () => {

    return (

        <div className='w-screen h-screen '>
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
                justify-end
                border-red-600
                border-3
                w-2/5
                '>
                    <div className="flex flex-col max-w-sm  min-h-40 rounded-3xl bg-yellow-400 shadow-xl">
                        <div className="px-6 py-4">
                            <div className="font-[CD-SemiBold] text-xl text-white mb-2">Habilidades</div>
                            <p className='text-white font-archivo'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
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
                    <br />web
                </p>

            </div>
        </div>

    )
}

export { MainFront }