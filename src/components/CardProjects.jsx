import React from "react";

const CardProjects = () => {
    const data = [
        {
            titulo: "Galeria de imágenes",
            imagen: "img/galeria.webp",
            altImg: "Imagen de galeria de imagenes",
            fecha: "24/03/2025",
            descripcion: "Galleria de imagenes usando la api de Unsplash ",
            ref: "https://jonap51.github.io/Gallery-React/",
        },
        {
            titulo: "Hero Page",
            imagen: "img/lyre.webp",
            altImg: "",
            fecha: "10/03/2025",
            descripcion: "Intento recrear el hero de una página de Behance",
        },
    ];

    return (
        <div className=" flex gap-30 m-8">
            {data.map((data, index) => (
                <div
                    key={index}
                    className=" flex-col w-125 h-150  rounded-4xl overflow-hidden"
                >
                    <div className="h-3/5">
                        <a href={data.ref} target="_blank">
                            <img
                                className=" object-cover w-full h-full  rounded-4xl transition duration-400 ease-in-out hover:scale-105"
                                src={data.imagen}
                                alt={data.altImg}
                            />
                        </a>
                    </div>

                    <div className="mb-8 flex-col font-archivo h-2/5 ">
                        <p className=" text-violeta-style text-lg font-bold mt-3">
                            {data.fecha}
                        </p>
                        <h2 className="my-3 font-[CD-Semibold] text-2xl">
                            {data.titulo}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {data.descripcion}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { CardProjects };
