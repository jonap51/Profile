import React, { useEffect, useRef, useState } from 'react';
import '../components/ImagePath.css';


const AboutMe = () => {

    const tools = [
        { name: "Vite", image: "/vite.svg" },
        { name: "React", image: "/vite.svg"},
        { name: "C#", image: "/vite.svg" },
        { name: "Unity", image: "/vite.svg" },
        { name: "Css", image: "/vite.svg" },
        { name: "Tailwind", image:"/vite.svg" },
        { name: "Bootstrap", image: "/vite.svg" },
        { name: "Html", image: "/vite.svg" },
        { name: "JavaScript", image: "/vite.svg" },
        { name: "Git", image: "/vite.svg"},
        { name: "Firebase", image:"/vite.svg" },
        { name: "Figma", image: "https://skillicons.dev/icons?i=figma" }
    ];


    const trackRef = useRef(null);
                    const positionRef = useRef(0);
    const [images, setImages] = useState(tools);




    return (
        <div className='m-20 relative overflow-hidden'>
            <div className='flex p-15 justify-center text-6xl font-[CD-Semibold] bg-white'>
                Herramientas que utilizo
            </div>


            {/* Contenedor de la marquesina */}
            <div className='relative overflow-hidden py-8'>
                {/* Animación de desplazamiento */}
                <div className='  flex whitespace-nowrap'>
                    {/* Imagenes para crear el loop continuo */}
                    <div className=' scroll  delay-0 flex mx-4' ref={trackRef}>
                        {tools.map((tool, index) => (
                            <img key={index} src={tool.image} alt={tool.name} className="h-[4.5em] w-auto mx-8" />

                        ))}
                    
                    </div>
                </div>
            </div>

            { /**Contenedor -Verde- */}
            <div className='flex justify-between my-8 p-8 bg-verde-style/40  rounded-4xl '>
                { /**Izquierda del Contenedor */}
                <div className='flex-2  p-8 '>
                    <div>
                        <h2 className='text-[65px]/18 pb-8 font-[CD-Semibold]'>
                            Enfocado en la excelencia
                        </h2>
                    </div>
                    <div className='text-xl font-archivo '>
                        <p>Con 14 años de experiencia en un laboratorio de creación y desarrollo de fragancias, he cultivado habilidades fundamentales que ahora aporto al desarrollo front-end:
                            <br />
                            - Precisión y atención al detalle.
                            <br />
                            - Enfoque centrado en el cliente, traduciendo necesidades específicas en soluciones que superan expectativas, como interfaces digitales.
                            <br />
                            - Metodología basada en datos para la toma de decisiones, aplicando análisis cuantitativo para optimizar experiencias de usuario.
                            <br />
                            - Capacidad para resolver problemas complejos de manera organizada y metódica, desglosando desafíos en componentes manejables.
                        </p>
                    </div>
                    <div className='mt-8'>
                        <button className='rounded-full border-2 py-3 px-8 text-xl font-semibold font-archivo'>
                            Conoce más
                        </button>
                    </div>

                </div>
                { /**Img Path */}
                <div className='absolute bg-verde-oscuro-style -bottom-0 right-139  rombos-imagen' />

                {/**Derecha del contenerdo */}
                <div className=' flex-1 border-2  overflow-hidden flex-col'>
                    <div className='flex justify-center h-1/2 '>
                        <img src="/vite.svg" alt="" />
                    </div>
                    <div className='flex justify-evenly h-1/2 '>
                        <img className='w-1/2 h-full' src="/vite.svg" alt="" />
                        <img className='w-1/2 h-full' src="/vite.svg" alt="" />
                    </div>

                 </div>

            </div>

        </div >

    )
}

export { AboutMe }