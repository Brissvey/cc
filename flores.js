// ==========================================
// FLORES
// ==========================================

const flores = [

    {
        x: 12,
        y: 25,
        tamaño: 70,
        rotacion: -10,
        foto: "fotos/foto1.jpeg",
        mensaje: "Este dia fue muy especial para nosotros nunca lo voy a olvida"
    },

    {
        x: 82,
        y: 22,
        tamaño: 75,
        rotacion: 10,
        foto: "fotos/foto2.jpeg",
        mensaje: "Ese dia que fuimos a el pollo, fue la vez que me senti mas feliz en el pollo"
    },

    {
        x: 7,
        y: 55,
        tamaño: 55,
        rotacion: -15,
        foto: "fotos/foto3.jpeg",
        mensaje: "Ese dia te mira puro payasito jajaj"
    },

    {
        x: 88,
        y: 55,
        tamaño: 60,
        rotacion: 15,
        foto: "fotos/foto4.jpeg",
        mensaje: "Esa fue mi primera vez en Dennis y me la pase incrible contigo, mas cuadno empezamos a llegar el albun del mundial"
    },

    {
        x: 18,
        y: 78,
        tamaño: 60,
        rotacion: -5,
        foto: "fotos/foto5.jpeg",
        mensaje: "Extraño esos dias cuando te iba a dejar a la u poruqe pasaba tiempo contigo."
    },

    {
        x: 78,
        y: 78,
        tamaño: 65,
        rotacion: 8,
        foto: "fotos/foto8.jpeg",
        mensaje: "Ese dia fue muy especial para mi porque lo pase contigo, pero ahora siento que ya no me quieres ver, sinceremente discukoame si te jodo mucho por veces"
    },

    {
        x: 35,
        y: 12,
        tamaño: 45,
        rotacion: -8,
        foto: "fotos/foto7.jpeg",
        mensaje: "Eres mi todo 💕"
    },

    {
        x: 65,
        y: 12,
        tamaño: 50,
        rotacion: 8,
        foto: "fotos/foto6.jpeg",
        mensaje: "Me enconta que tengas las confinza de compartir tus momentos felices de tu familia conmigo."
    }

];


// ==========================================
// CREAR FLORES
// ==========================================

function crearFlores() {

    const contenedor =
        document.createElement("div");


    contenedor.id =
        "flores";


    contenedor.style.position =
        "fixed";


    contenedor.style.inset =
        "0";


    contenedor.style.width =
        "100%";


    contenedor.style.height =
        "100%";


    contenedor.style.pointerEvents =
        "none";


    contenedor.style.zIndex =
        "5";


    contenedor.style.opacity =
        "0";


    contenedor.style.transition =
        "opacity 2s ease";


    document.body.appendChild(
        contenedor
    );


    flores.forEach(
        (flor, indice) => {

            const elemento =
                document.createElement("div");


            elemento.className =
                "flor";


            elemento.innerHTML =
                "🌻";


            elemento.style.position =
                "absolute";


            elemento.style.left =
                flor.x + "%";


            elemento.style.top =
                flor.y + "%";


            elemento.style.fontSize =
                flor.tamaño + "px";


            elemento.style.transform =
                `
                translate(-50%, -50%)
                rotate(${flor.rotacion}deg)
                `;


            elemento.style.filter =
                "drop-shadow(0 0 12px #ffe600)";


            elemento.style.animation =
                `
                flotarFlor
                ${2 + indice * 0.15}s
                ease-in-out
                infinite
                `;


            // IMPORTANTE:
            // permite hacer clic

            elemento.style.pointerEvents =
                "auto";


            // ==================================
            // CLICK EN LA FLOR
            // ==================================

            elemento.addEventListener(
                "click",
                () => {

                    abrirModal(
                        flor.foto,
                        flor.mensaje
                    );

                }
            );


            contenedor.appendChild(
                elemento
            );

        }
    );

}


// ==========================================
// MODAL
// ==========================================

function abrirModal(
    foto,
    mensaje
) {

    const modal =
        document.getElementById("modal");


    const modalFoto =
        document.getElementById("modalFoto");


    const modalMensaje =
        document.getElementById("modalMensaje");


    modalFoto.src =
        foto;


    modalMensaje.textContent =
        mensaje;


    modal.classList.add(
        "activo"
    );

}


// ==========================================
// CERRAR MODAL
// ==========================================

function cerrarModal() {

    const modal =
        document.getElementById("modal");


    modal.classList.remove(
        "activo"
    );

}


// ==========================================
// BOTÓN CERRAR
// ==========================================

document
    .getElementById("cerrarModal")
    .addEventListener(
        "click",
        cerrarModal
    );


// ==========================================
// CERRAR AL HACER CLICK AFUERA
// ==========================================

document
    .getElementById("modal")
    .addEventListener(
        "click",
        (evento) => {

            if (
                evento.target.id ===
                "modal"
            ) {

                cerrarModal();

            }

        }
    );


// ==========================================
// CERRAR CON ESC
// ==========================================

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape"
        ) {

            cerrarModal();

        }

    }
);


// ==========================================
// ANIMACIÓN DE FLORES
// ==========================================

const estilo =
    document.createElement("style");


estilo.innerHTML = `

@keyframes flotarFlor {

    0%,
    100% {

        margin-top: 0px;

    }

    50% {

        margin-top: -12px;

    }

}

`;


document.head.appendChild(
    estilo
);


// ==========================================
// INICIAR
// ==========================================

crearFlores();


const mensajePrincipal =
    document.querySelector(
        ".mensaje"
    );


const contenedorFlores =
    document.getElementById(
        "flores"
    );


// ==========================================
// ANIMACIÓN DE ENTRADA
// ==========================================

// Primero aparece "Te amo"

setTimeout(
    () => {

        mensajePrincipal.classList.add(
            "mostrar"
        );

    },
    1000
);


// Después aparecen las flores

setTimeout(
    () => {

        contenedorFlores.style.opacity =
            "1";

    },
    2500
);