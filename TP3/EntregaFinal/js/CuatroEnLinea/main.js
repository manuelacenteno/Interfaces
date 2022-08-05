let canvas = document.querySelector("#myCanvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let hayGanador = false;
let cantFig = 21;
let turno = 1;
let fichas = [];
let ultimaFigClickeada = null;
let isMouseDown = null;
let tamanio = 4;
var ganador1 = document.querySelector("#winnerone");
let turnoJugador = document.getElementById("turno-jug");
let cartel1 = document.querySelector("#winner1");
let cartel2 = document.querySelector("#winner2");
let headerGame = document.querySelector(".header-game");
let cartelInicio = document.querySelector(".iniciar-juego");
let timer = null;
let iniciado = false;
let timerVariable = null;
let totalSegundos = 0;
let tablero = null;
this.drawJuego(4);


let btnEmpezar = document.getElementById('iniciar');
let center = document.querySelector(".center");

btnEmpezar.addEventListener("click", function() {
    center.classList.toggle("hide-out");
    let tamanioSeleccionado = document.querySelector('#select-tamanio').value;

    iniciado = true;
    if (tamanioSeleccionado) {
        tamanio = tamanioSeleccionado;
        fichas = [];

        limpiarCanvas();
        drawJuego();
    }

    textoJugador1();
    textoJugador2();
    timer = setTimeout(reiniciar, 300000);
    timerVariable = setInterval(tiempoJuego, 1000);

})

function tiempoJuego() {
    ++totalSegundos;
    var minutos = Math.floor(totalSegundos / 60);
    var segundos = totalSegundos - (minutos * 60);
    document.getElementById("timer").innerHTML = "  " + minutos + ":" + segundos;
}


//Reiniciar juego (4-5 o 6 en fila)
document.querySelector('#reiniciar').addEventListener('click', () => {
    if (iniciado) {
        reiniciar();
    }

});


function reiniciar() {
    hayGanador = false;
    cartel1.classList.remove("cartelGanadorVisible");
    cartel1.classList.add("cartelGanador");
    cartel2.classList.remove("cartelGanadorVisible");
    cartel2.classList.add("cartelGanador");
    canvas.classList.remove("canvasJuego");
    fichas = [];
    turno = 1;
    limpiarCanvas();
    drawJuego();
    clearInterval(timerVariable);
    totalSegundos = 0;
    timerVariable = setInterval(tiempoJuego, 1000)
    timer = setTimeout(reiniciar, 300000);
}

function textoJugador1() {
    let texto = "JugadorUno"; //texto de prueba
    ctx.beginPath() //iniciar ruta
    ctx.fillStyle = "black"; //color de relleno
    ctx.font = "bold 20px arial"; //estilo de texto
    ctx.fillText(texto, 20, 80); //texto con método fill

}

function textoJugador2() {
    let texto = "JugadorDos";
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "bold 20px arial";
    ctx.fillText(texto, 820, 80);

}

function drawJuego() {
    addFicha();
    iniciarJuego();
    imprimirTurno();
}

function iniciarJuego() {
    tablero = new Tablero(200, 0, 600, 500, '#FFF7CE', ctx, tamanio);
    tablero.iniciarJuego(tamanio);
}




/*CREO LAS FICHAS*/
function addFicha() {
    if (tamanio == 4) {
        cantFig = 15;
    } else if (tamanio == 5) {
        cantFig = 21;
    } else if (tamanio == 6) {
        cantFig = 28;
    }

    for (let i = 0; i < cantFig; i++) {
        let posY = Math.round(Math.random() * 200);
        let posX = Math.round(Math.random() * 100);
        //let fichaRoja=new Ficha(20 + posX, 250 + posY, '#ff0000', ctx)

        let fichaRoja = new Ficha(20 + posX, 250 + posY, 15, '#039000', ctx, '#017000', i, 1);
        //let fichaAzul = new Ficha(850 + posX, 250 + posY, '#0000ff', ctx);
        let fichaAmarilla = new Ficha(850 + posX, 250 + posY, 15, '#ff2221', ctx, '#ff0000', i, 2);
        fichaRoja.draw(1);
        fichaAmarilla.draw(2);
        fichas.push(fichaRoja);
        fichas.push(fichaAmarilla);

    }
}






function drawAll() {
    textoJugador1();
    textoJugador2();

    tablero.drawJuego(tamanio);
    console.log(fichas.length);
    for (let i = 0; i < fichas.length; i++) {
        fichas[i].draw();
    }
}

/*BORRO Y REDIBUJO TODO */
function limpiarCanvas() {
    canvas.width = canvas.width;
}


/* EVENTOS PARA DETECTAR CUANDO QUIERE ARRASTRAR UNA FICHA*/

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);


/*  CUANDO CLICKEO  */
function onMouseDown(e) {
    if (iniciado) {
        isMouseDown = true;

        //le saco el resaltado a la figura que ya tenia seleccionada
        if (ultimaFigClickeada != null) {
            ultimaFigClickeada.setResaltado(false);
            ultimaFigClickeada = null
        }

        //chequeo si selecciono otra figura (o clickeo en otro lado)
        //coordenadas de donde clickeó, dentro del canvas x layer
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;
        let figuraClickeada = buscarFiguraSeleccionada(x, y);

        if (figuraClickeada != null) {
            if (figuraClickeada.getJugador() == turno && hayGanador == false) {
                figuraClickeada.setResaltado(true);
                ultimaFigClickeada = figuraClickeada;
            }
        }
        limpiarCanvas();
        drawAll();
    }

}

/*  CUANDO MUEVO EL MOUSE ARRASTRANDO UN OBJETO  */
function onMouseMove(e) {
    if (iniciado) {
        if (isMouseDown && ultimaFigClickeada != null) {
            if (ultimaFigClickeada.getJugador() == turno) {
                ultimaFigClickeada.setPosicion(e.layerX - e.currentTarget.offsetLeft, e.layerY - e.currentTarget.offsetTop);
                limpiarCanvas();
                drawAll();
            }
        }
    }

}

/*  CUANDO SUELTO EL OBJETO  */
function onMouseUp(e) {
    if (iniciado) {

        if (ultimaFigClickeada != null) {

            for (let i = 0; i < fichas.length; i++) {
                if (tablero.checkInsert(ultimaFigClickeada) != -1) {
                    if (JSON.stringify(fichas[i]) === JSON.stringify(ultimaFigClickeada)) {
                        let col = tablero.checkInsert(ultimaFigClickeada);
                        let fila = tablero.insertarFicha(col, turno);
                        console.log(fila);
                        fichas.splice(i, 1);
                        cantFig--;
                        hayGanador = tablero.esGanador(turno, col, fila);
                        if (hayGanador) {
                            canvas.classList.add("canvasJuego");
                            mostrarGanador(hayGanador);
                        }

                        cambiarTurno();
                        imprimirTurno();
                        limpiarCanvas();
                        drawAll();

                    }
                }
            }
        }
        isMouseDown = false;
    }

}

function cambiarTurno() {
    if (turno == 1) {
        turno = 2;
    } else if (turno == 2) {
        turno = 1
    }
}

/*MUESTRO TURNO*/
function imprimirTurno() {

    turnoJugador.innerHTML = "Jugador " + turno;
}

/* BUSCO CADA FIGURA SI ESTA CLICKLEADA*/
function buscarFiguraSeleccionada(x, y) {
    for (let i = 0; i < fichas.length; i++) {
        const ficha = fichas[i];

        if (ficha.isPointInside(x, y)) {

            return ficha;
        }
    }
}

function getGanador() {
    return hayGanador;
}


function mostrarGanador(jugador) {
    clearInterval(timerVariable);
    if (jugador == 1) {
        cartel1.classList.toggle("cartelGanadorVisible");
        cartel1.classList.toggle("cartelGanador");
    } else {
        cartel2.classList.toggle("cartelGanadorVisible");
        cartel2.classList.toggle("cartelGanador");
    }
}