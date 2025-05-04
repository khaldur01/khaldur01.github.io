document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audioFondo");
    const controlMusica = document.getElementById("controlMusica");
    const volumenControl = document.getElementById("volumen");

    // Controlar reproducción y pausa de la música
    controlMusica.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            controlMusica.textContent = "Pausar música";
        } else {
            audio.pause();
            controlMusica.textContent = "Reproducir música";
        }
    });

    // Ajustar el volumen de la música
    volumenControl.addEventListener("input", () => {
        audio.volume = volumenControl.value / 100; // Convertir el rango (0-100) a (0.0-1.0)
    });

    // Reproducir automáticamente al cargar la página
    audio.play();
});

function reproducirAudio() {
    const audio = document.getElementById("audioFondo");
    audio.play();
}
function pausarAudio() {
    const audio = document.getElementById("audioFondo");
    audio.pause();      
}
function detenerAudio() {
    const audio = document.getElementById("audioFondo");
    audio.pause();  
    audio.currentTime = 0; // Reinicia el audio al inicio
}
function cambiarVolumen() {
    const audio = document.getElementById("audioFondo");
    const volumen = document.getElementById("volumen").value;   
    audio.volume = volumen / 100; // Ajusta el volumen (0.0 a 1.0)
}