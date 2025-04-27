import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const getBackgroundStyle = () => {
        if (scrollPosition < 200) {
            const progress = scrollPosition / 200;
            const opacity = progress * 1;
            return { backgroundColor: `rgba(24, 0, 38, ${opacity})` };
        } else {
            return { backgroundColor: "rgba(24, 0, 38)" };
        }
    };

    return (
        <div
            className="flex z-50 w-full justify-center py-4 fixed transition-colors duration-300"
            style={getBackgroundStyle()}
        >
            <div className="flex items-center w-[calc(100vw-20em)] ">
                <div className="flex-1 ">
                    <p
                        className="flex text-4xl font-[CD-SemiBold] items-start  text-transparent bg-clip-text
                bg-gradient-to-r from-azul-style from-0%  via-white via-40% to-white to-100%"
                    >
                        Jonatan Paez
                    </p>
                </div>
                <nav className=" flex flex-1 ">
                    <ul className="flex  w-full justify-around  text-white font-archivo font-bold text-base ">
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
