import React from "react";
import { CardProjects } from "../components/CardProjects";
import { Element } from "react-scroll";

const Proyects = () => {
    return (
        <section className="mx-30">
            <Element name="proyectos">
                <div>
                    <div className="text-[65px]/18 pb-8 font-[CD-Semibold]">
                        <h2>Mis proyectos</h2>
                    </div>
                    <div className="flex ">
                        <button className="rounded-full bg-gray-200 py-3 px-8 font-archivo me-8">
                            All
                        </button>
                        <button className="rounded-full bg-gray-200 py-3 px-8 font-archivo">
                            Website
                        </button>
                    </div>

                    <div className="">
                        <CardProjects />
                    </div>
                </div>
            </Element>
        </section>
    );
};

export { Proyects };
