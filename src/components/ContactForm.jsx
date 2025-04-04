import React, { useState } from "react";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);
    const accessKey = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    const validarFormulario = () => {
        let nuevosErrores = {};

        if (!email) {
            nuevosErrores.email = "El email es obligatorio.";
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        ) {
            nuevosErrores.email = "El email no es válido.";
        }

        if (!nombre) {
            nuevosErrores.nombre = "El nombre es obligatorio.";
        }

        if (mensaje.length > 800) {
            nuevosErrores.mensaje =
                "El mensaje no puede tener más de 800 caracteres.";
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();

        if (validarFormulario()) {
            try {
                const formData = new FormData();
                formData.append("email", email);
                formData.append("name", nombre);
                formData.append("message", mensaje);

                const response = await fetch(accessKey, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (response.ok) {
                    setEnviado(true);
                    setErrores({});
                    setEmail("");
                    setNombre("");
                    setMensaje("");
                } else {
                    const errorData = await response.json();
                    console.error("Error del servidor:", errorData);
                    alert(
                        "Error al enviar: " +
                            (errorData.error || "Inténtalo de nuevo")
                    );
                }
            } catch (error) {
                console.error("Error de red:", error);
                alert("Hubo un error de red. Inténtalo de nuevo.");
            }
        }
    };

    if (enviado) {
        return (
            <p className=" flex  rounded-4xl justify-center bg-verde-style p-10 animate-[pulse_2s_2]  text-2xl font-[CD-Medium] ">
                ¡Formulario enviado con éxito!
            </p>
        );
    } /*
 animate-[wiggle_1s_ease-in-out_infinite] */
    return (
        <form
            className="px-15 py-13 flex-col flex h-full w-full font-[CD-Medium] text-xl"
            onSubmit={manejarEnvio}
        >
            <label className="mb-1" htmlFor="nombre">
                Nombre:
            </label>
            <input
                className=" border-1 rounded-3xl text-lg py-2 px-5 font-archivo"
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && (
                <p className="text-red-600 text-base">{errores.nombre}</p>
            )}

            {/* ... (campos y errores) ... */}
            <label className="mb-1 mt-5" htmlFor="email">
                Email:
            </label>
            <input
                className=" border-1 rounded-3xl py-2 text-lg px-5 font-archivo "
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errores.email && (
                <p className="text-red-600 text-base">{errores.email}</p>
            )}

            <label className="mb-1 mt-5" htmlFor="mensaje">
                Mensaje:
            </label>
            <textarea
                className=" border-1 rounded-3xl py-2 text-lg px-5 font-archivo"
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                maxLength="800"
            />
            {errores.mensaje && (
                <p className="text-red-600 text-base">{errores.mensaje}</p>
            )}

            <button
                className="mt-5 border rounded-full bg-azul-style text-normal text-white p-3"
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
}

export { ContactForm };
