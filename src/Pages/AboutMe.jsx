import React, { useEffect, useMemo, useRef, useState } from "react";
import "../components/ImagePath.css";
import { Element } from "react-scroll";

const AboutMe = () => {
    const tools = [
        { name: "Vite", image: "vite.svg" },
        { name: "React", image: "https://skillicons.dev/icons?i=react" },
        { name: "C#", image: "https://skillicons.dev/icons?i=cs" },
        { name: "Unity", image: "https://skillicons.dev/icons?i=unity" },
        { name: "Css", image: "https://skillicons.dev/icons?i=css" },
        { name: "Tailwind", image: "https://skillicons.dev/icons?i=tailwind" },
        {
            name: "Bootstrap",
            image: "https://skillicons.dev/icons?i=bootstrap",
        },
        { name: "Html", image: "https://skillicons.dev/icons?i=html" },
        { name: "JavaScript", image: "https://skillicons.dev/icons?i=js" },
        { name: "Git", image: "https://skillicons.dev/icons?i=git" },
        { name: "Firebase", image: "https://skillicons.dev/icons?i=firebase" },
        { name: "Figma", image: "https://skillicons.dev/icons?i=figma" },
    ];

    // Duplico el set de imágenes
    const duplicatedTools = useMemo(() => {
        return [...tools, ...tools];
    }, [tools]); // El useMemo ayuda si 'tools' fuera dinámico, aquí es más por convención

    return (
        <div className="mx-30 my-20 relative ">
            <div className="flex justify-center text-6xl font-[CD-Semibold] bg-white">
                Herramientas que utilizo
            </div>
            {/* Contenedor de la marquesina */}
            <div className="marquee-window py-20">
                {/* Animación de desplazamiento */}
                <div className=" marquee-content whitespace-nowrap">
                    {/* Imagenes para crear el loop continuo */}
                    {duplicatedTools.map((tool, index) => (
                        <img
                            key={index}
                            src={tool.image}
                            alt={tool.name}
                            className="h-[4.5em] w-[4.5em] mx-8 flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
            {/**Contenedor -Verde- */}
            <Element name="sobreMi">
                <div className="relative flex justify-between my-20 p-8 bg-verde-style/40 overflow-clip rounded-4xl ">
                    {/**Img Path */}
                    <div className="absolute bg-verde-oscuro-style -bottom-5 right-139  rombos-imagen" />
                    {/**Izquierda del Contenedor */}
                    <div className="flex-2 px-8 ">
                        <div>
                            <h2 className="text-[65px]/18 pb-8 font-[CD-Semibold]">
                                Enfocado en la excelencia
                            </h2>
                        </div>
                        <div className="text-xl font-archivo ">
                            <p>
                                Con 14 años de experiencia en un laboratorio de
                                creación y desarrollo de fragancias, he
                                cultivado habilidades fundamentales que ahora
                                aporto al desarrollo front-end:
                                <br />
                                - Precisión y atención al detalle.
                                <br />
                                - Enfoque centrado en el cliente, traduciendo
                                necesidades específicas en soluciones que
                                superan expectativas, como interfaces digitales.
                                <br />
                                - Metodología basada en datos para la toma de
                                decisiones, aplicando análisis cuantitativo para
                                optimizar experiencias de usuario.
                                <br />- Capacidad para resolver problemas
                                complejos de manera organizada y metódica,
                                desglosando desafíos en componentes manejables.
                            </p>
                        </div>
                        <div className="mt-8">
                            <button
                                className="rounded-full border-2 border-violeta-oscuro-style py-3 px-8 text-xl font-semibold font-archivo 
                          hover:bg-black hover:text-white  transition duration-200 ease-in"
                            >
                                Conoce más
                            </button>
                        </div>
                    </div>

                    {/**Derecha del contenerdo */}
                    <div className=" flex flex-col justify-center items-center z-1 flex-1 h-120 w-100 overflow-hidden">
                        <div className="flex items-center justify-center h-1/2 w-full p-4">
                            <img
                                className="rounded-xl object-cover w-full h-full"
                                src="img/img-1.webp"
                                alt="persona de espalda escribiendo código y con una remera que dice react"
                            />
                        </div>
                        <div className="flex justify-evenly h-1/2 w-full gap-x-10 p-4">
                            <img
                                className="rounded-xl object-cover w-1/2 h-full"
                                src="img/img-2.webp"
                                alt="persona con 3 monitores y se ven árboles desde la ventana"
                            />
                            <img
                                className="rounded-xl object-cover w-1/2 h-full"
                                src="vite.svg"
                                alt="imagen de simulación 3"
                            />
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export { AboutMe };
