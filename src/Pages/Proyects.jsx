import React from 'react';
import { CardProjects } from '../components/CardProjects';

const Proyects = () => {
    return (

        <section className='m-20'>
            <div >
                <div className='text-[65px]/18 pb-8 font-[CD-Semibold]'>
                    <h2>Proyectos que hice</h2>
                </div>
                <div className='flex justify-stretch'>

                    <button className='rounded-full bg-gray-200 py-3 px-8 font-archivo me-8'>
                        All
                    </button>
                    <button className='rounded-full bg-gray-200 py-3 px-8 font-archivo'>
                        Website
                    </button>
                </div>

                <div className='flex'>
                    <CardProjects />
                    <CardProjects />
                    <CardProjects />
                </div>
            </div>
        </section >
    )
}

export { Proyects }