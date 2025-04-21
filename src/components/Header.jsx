import React from "react";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="flex w-[calc(100vw-20em)]">
                <div className="flex-1  pt-8">
                    <p
                        className="text-4xl font-[CD-SemiBold] justify-center text-transparent bg-clip-text
                bg-gradient-to-r from-azul-style from-0%  via-white via-40% to-white to-100%"
                    >
                        Jonatan Paez
                    </p>
                </div>
                <nav className=" flex flex-1 ">
                    <ul className="flex  w-full justify-around items-end text-white font-archivo font-bold text-base ">
                        <li>
                            <Link
                                to="inicio"
                                smooth={true}
                                duration={600}
                                className="hover:text-azul-style  progressive-underline cursor-pointer"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="proyectos"
                                smooth={true}
                                duration={600}
                                className="hover:text-azul-style progressive-underline cursor-pointer"
                            >
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="sobreMi"
                                smooth={true}
                                duration={600}
                                className="hover:text-azul-style progressive-underline cursor-pointer"
                            >
                                Sobre mi
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contactame"
                                spy={true}
                                smooth={true}
                                duration={600}
                                className="hover:text-azul-style progressive-underline cursor-pointer"
                            >
                                Contactame
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className=" flex-1" />
            </div>
        </div>
    );
};

export { Header };
/* <a className="hover:text-azul-style" href="#">
                        Inicio
                    </a>
                    <a className="" href="#">
                        Servicios
                    </a>
                    <a className="hover:text-azul-style" href="#">
                        Sobre mi
                    </a>
                    <a className="hover:text-azul-style" href="#contactame">
                        Contactame
                    </a>*/
