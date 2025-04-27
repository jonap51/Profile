import React from "react";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { Element } from "react-scroll";

const Hero = () => {
    return (
        <Element name="inicio">
            <div className="flex flex-col h-screen box-border bg-black overflow-hidden ">
                <Header />
                <Main />
            </div>
        </Element>
    );
};

export { Hero };
