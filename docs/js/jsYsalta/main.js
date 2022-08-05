document.addEventListener('DOMContentLoaded', function() {


    let layer1 = document.getElementById('layer1');
    let layer2 = document.getElementById('layer2');
    let layer3 = document.getElementById('layer3');
    let personajeSeleccionado = new Personaje(personaje);

    console.log(personajeSeleccionado);

    layer1.style.animationPlayState = "paused"; //FUNCIONA
    layer2.style.animationPlayState = "paused";
    layer3.style.animationPlayState = "paused";
    personaje.style.animationPlayState = "paused";

    let jugando = false;
    /*TEMPORIZADOR*/
    let conteoSegundos;
    let conteo;
    let final = 60;


    function Temporizador(id, inicio, final) {
        this.id = id;
        this.inicio = inicio;
        this.final = final;
        this.contador = this.inicio;

        this.conteoSegundos = function() {
            if (this.contador == this.final) {
                this.conteoSegundos = null;
                return;
            }

            document.getElementById(this.id).innerHTML = this.contador--;
            conteo = setTimeout(this.conteoSegundos.bind(this), 1000);
            //console.log("me fijo" + conteo);
        };
    }

    let temporizador = new Temporizador('timer', final, 0);



    /*DIV INICIAR*/
    let btnEmpezar = document.getElementById('iniciar');
    let center = document.querySelector(".center");


    btnEmpezar.addEventListener('click', function(evento) {
        evento.preventDefault();
        center.classList.toggle("hide-out");
        startAnimation();
        temporizador.conteoSegundos();




    })

    function pararAnimacion() {

        layer1.style.animationPlayState = "paused"; //FUNCIONA
        layer2.style.animationPlayState = "paused";
        layer3.style.animationPlayState = "paused";
        clearInterval(intervaloCrearElementos);
        clearInterval(intervaloChequearColision);


    }

    function startAnimation() {
        layer1.style.animationPlayState = "running";
        layer2.style.animationPlayState = "running";
        layer3.style.animationPlayState = "running";
        personaje.style.animationPlayState = "running";

        jugando = true;
        intervaloCrearElementos = setInterval(() => {
            if (jugando) {
                generarObstaculos();

                if (conteo >= final) {
                    pararAnimacion();
                    finJuego();

                }

            }

        }, 2500);
        intervaloChequearColision = setInterval(() => {

            for (let elem of elementos) {

                elem.chequearColision(personajeSeleccionado);
                if (elem.getChoque() == true) {
                    personajeSeleccionado.chocar();
                    pararAnimacion();
                    finJuego();
                    clearTimeout(conteo, conteoSegundos);

                }
            }

        }, 600);

    }



    /*GUARDO LOS OBSTACULOS*/
    let elementos = [];
    let elemento;
    let acierto;

    /*GUARDO PUNTAJE*/
    let puntaje = 0;

    let fin = document.querySelector(".fin");

    /*CARTEL FINALIZACION*/
    function finJuego() {
        fin.style.display = "block";
        document.getElementById('puntaje2').innerText = "Su puntaje es:" + puntaje + " puntos";
    }



    /*EVENTO SALTAR CON BARRA ESPACIADORA, FLECHA ARRIBA Y LA W*/
    window.addEventListener('keydown', function(evento) {

        if (evento.keyCode == " " || evento.keyCode === 38 || evento.keyCode === 87) {
            personajeSeleccionado.saltar();
            acierto = new Elemento("yes", 1);
            acierto.aciertoSalta("yes");
            let intervaloAciertoSalta = setInterval(() => {
                acierto.ocultarElemento();
                clearInterval(intervaloAciertoSalta);


            }, 1000);


            ganarPuntos();

        }


    })


    /*CREO LOS OBSTACULOS*/
    function generarObstaculos() {
        // GENERO UN NUMERO PARA CREAR UN ELEMENTO, 0 SALE MONEDA,1 SALE BOMBA,2 SALE MONEDA
        let num = ((Math.floor(Math.random() * 2)));

        switch (num) {
            case 0:
                /*elemento = new Elemento("moneda", 1);
                elementos.push(elemento);
                break;*/
            case 1:
                elemento = new Elemento("piedra", 0);
                elementos.push(elemento);
                break;
        }
        let posicion = elementos[0].getPosicion();
        //console.log(posicion);
        if (posicion <= 50) {
            elementos[0].ocultarElemento();
            elementos.splice(0, 1); //lo borro del arreglo
        }

    }

    function ganarPuntos() {

        if (personajeSeleccionado.getSalto() == true) {
            puntaje++;

        }
        document.getElementById('puntaje').innerText = puntaje;

    }


})