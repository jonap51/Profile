import React from "react";

const CardProjects = () => {
    const data = [
        {
            titulo: "Galeria de imágenes",
            imagen: "img/gallery.png",
            altImg: "Imagen de galeria de imagenes",
            fecha: "24/03/2025",
            descripcion: "Galleria ",
        },
        {
            titulo: "Página",
            imagen: "img/lyre.png",
            altImg: "",
            fecha: "24/03/2025",
            descripcion: "Galleria ",
        },
        {
            titulo: "Galeria de imagenes",
            imagen: "img/gallery.png",
            altImg: "Descripción alternativa de la imagen 1",
            fecha: "24/03/2025",
            descripcion: "Galleria ",
        },
    ];

    return (
        <div className=" flex w-1/2 h-1/2 m-8">
            {data.map((data, index) => (
                <div
                    key={index}
                    className="w-100 h-100  border-2 rounded-[50px] overflow-hidden"
                >
                    <img src={data.imagen} alt={data.altImg} className="" />
                    <div className="my-8 flex-col font-archivo  ">
                        <p className=" text-violeta-style text-lg font-bold mt-3">
                            {data.fecha}
                        </p>
                        <h2 className="my-3 font-[CD-Semibold] text-2xl">
                            {data.titulo}
                        </h2>
                        <p className="text-xl text-gray-600">descripción</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { CardProjects };
