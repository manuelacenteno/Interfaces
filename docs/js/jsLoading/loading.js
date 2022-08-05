temporizador();



function temporizador() {
    setTimeout(mostrarLoad, 3000);
}

function mostrarLoad() {
    let contenedorLoader = document.querySelector('#fondo');
    contenedorLoader.style.visibility = 'hidden';
    contenedorLoader.style.opacity = 0;
    console.log("prueba");
}