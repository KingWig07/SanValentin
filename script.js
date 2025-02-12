// Efecto de escritura en el mensaje principal
const mensaje = "San Valentín 2025 F + V";
let i = 0;
const velocidad = 100;  // Velocidad de la animación

function escribirMensaje() {
    if (i < mensaje.length) {
        document.getElementById("mensajePrincipal").innerHTML = mensaje.substring(0, i + 1);
        i++;
        setTimeout(escribirMensaje, velocidad);
    }
}

window.onload = escribirMensaje;

const eventos = {
    cine: {
        titulo: "Noche de Cine",
        texto: "No hay spoilers jajaja."
    },
    picnic: {
        titulo: "Concierto Acústico & Picnic",
        texto: "Melodías que nos transportarán a mundos mágicos, en un teatro cerca de un parque emblematico."
    },
    cumple: {
        titulo: "Nuestro Cumple Mes",
        texto: "Un lugar donde el mar nos abraza y el sol nos ilumina."
    }
};

// Función para mostrar detalles en el modal
function mostrarDetalle(evento) {
    document.getElementById("detalle-titulo").innerText = eventos[evento].titulo;
    document.getElementById("detalle-texto").innerText = eventos[evento].texto;
    document.getElementById("detalle-modal").style.display = "flex";
}

// Cerrar modal
function cerrarModal() {
    document.getElementById("detalle-modal").style.display = "none";
}

// Función para iniciar un contador regresivo
function iniciarContador(idElemento, fechaObjetivo) {
    const elemento = document.getElementById(idElemento);

    function actualizarContador() {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            elemento.innerHTML = "¡Ya llegó el día! 🎉";
            clearInterval(intervalo);  // Detener el contador cuando llegue el día
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        elemento.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    // Actualizar el contador cada segundo
    const intervalo = setInterval(actualizarContador, 1000);
    actualizarContador(); // Llamada inicial para evitar el retraso de 1s
}

// Fechas de los eventos (modifica según necesites)
const fechaCine = new Date('2025-02-12T19:30:00').getTime();
const fechaPicnic = new Date('2025-02-14T16:00:00').getTime();
const fechaCumple = new Date('2025-02-16T00:00:00').getTime();

// Iniciar los contadores
iniciarContador('contador-cine', fechaCine);
iniciarContador('contador-picnic', fechaPicnic);
iniciarContador('contador-cumple', fechaCumple);

// Función para mostrar detalles en el modal
function mostrarDetalle(evento) {
    document.getElementById("detalle-titulo").innerText = eventos[evento].titulo;
    document.getElementById("detalle-texto").innerText = eventos[evento].texto;
    document.getElementById("detalle-modal").style.display = "flex";
}

// Cerrar modal de detalles
function cerrarModalDetalle() {
    document.getElementById("detalle-modal").style.display = "none";
}

// Mostrar el popup con el GIF
function mostrarPopup() {
    const popup = document.getElementById('popup-gif');
    popup.style.display = 'flex';  // Mostrar el popup
}

// Cerrar el popup del GIF
function cerrarModalGif() {
    const popup = document.getElementById('popup-gif');
    popup.style.display = 'none';  // Ocultar el popup
}

// Evento para el botón de confirmar asistencia
document.getElementById('confirmar-btn').addEventListener('click', () => {
    mostrarPopup();
});


AOS.init();
