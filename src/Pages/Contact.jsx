import React from "react";
import "../components/ImagePath.css";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
    return (
        <section className="relative flex bg-violeta-oscuro-style p-30 mt-20 overflow-hidden">
            <div className="flex h-130 justify-center items-center">
                <div className="flex w-1/2 ">
                    <h3
                        className="font-[CD-Semibold] leading-[1.4]
 text-white text-6xl"
                    >
                        ¿Quieres
                        <span className="text-verde-style"> trabajar </span>
                        conmigo? Por favor,
                        <span className="text-verde-style">
                            {" "}
                            siéntete libre{" "}
                        </span>
                        de contactarme.
                    </h3>
                </div>

                <div className="w-1/2 ms-10 bg-white rounded-4xl border-red z-1">
                    <ContactForm />
                </div>
            </div>

            <div className=" absolute bg-white -top-2"> </div>
            <div className="rayo absolute  bg-violeta-style left-215 bottom-0"></div>
            <div className="rombos-imagen absolute bg-azul-oscuro-style  -right-5 -top-2"></div>
        </section>
    );
};

export { Contact };
