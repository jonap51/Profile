import React from "react";
import "./MainFront.css";

const MainFront = () => {
  return (
    <div className=" w-[calc(100vw-15em)] h-[calc(100vh-7em)] pt-8 ">
      <div className="flex h-3/5">
        <p className=" p-8 w-2/3 flex text-white font-[CD-SemiBold] text-8xl">
          Soy
          <br />
          Jonatan Paez
        </p>
        <p className="flex  items-center w-1/3 text-white font-archivo text-2xl">
          Cada Pixel Un Latido,
          <br />
          Un Mundo Digital Se Crea
        </p>
      </div>

      <div className="flex h-2/5">
        <div className="relative flex justify-center w-1/2">
          {/**Contenerdor del Blur para que no salga afuera */}
          <div className="absolute w-md h-45 overflow-hidden rounded-[20px]">
            {/**Blur*/}
            <div className=" h-full w-full bg-white/10 backdrop-blur-md " />
          </div>
          {/**Marco contenedor */}
          <div className="flex max-w-md h-45 marco ">
            <div className="px-6  py-3  ">
              <div className="flex justify-between items-center">
                <div className="font-[CD-SemiBold] text-3xl text-white mb-2">
                  Profesional
                </div>
                {/*Icono*/}
                <div className="flex size-13 bg-white justify-center items-center rounded-full ">
                  <span
                    className="material-icons-round"
                    style={{ fontSize: "35px" }}
                  >
                    call_made
                  </span>
                </div>
              </div>
              <p className="text-white font-archivo pt-3">
                Transformo ideas en experiencias web funcionales y atractivas.
                Desde la concepción hasta la implementación, me apasiona crear
                interfaces que cautivan y mejoran la interacción del usuario{" "}
              </p>
            </div>
          </div>
        </div>

        <p className="flex items-end justify-center w-1/2 text-white font-[CD-SemiBold] text-8xl">
          Desarrollador
          <br /> Front End
        </p>
      </div>
    </div>
  );
};

export { MainFront };
