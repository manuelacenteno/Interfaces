class Elemento {

    constructor(tipo, id) {
        this.tipo = tipo;
        this.id = id;
        this.clase = "." + tipo;
        this.divElemento;
        this.contenedor;
        this.posicion = null;
        this.choque = false;
        this.generarObstaculo();
    }

    //CREO EL ELEMENTO COMO OBSTACULO BOMBA O MONEDA
    generarObstaculo() {
        this.contenedor = document.querySelector(".elementos");
        this.divElemento = document.createElement("div");
        this.divElemento.setAttribute("id", this.tipo);
        this.contenedor.appendChild(this.divElemento);
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }

    /*AGARRA LA POSICION DEL ELEMENTO EN LA PANTALLA*/
    getPosicion() {
        return this.divElemento.offsetLeft;

    }

    /*BORRO EL ELEMENTO Y EVITO QUE SE ACUMULEN EN UN COSTADO*/
    ocultarElemento() {
        this.divElemento.removeAttribute("id", this.tipo);

    }

    getChoque() {
        return this.choque;
    }


    chequearColision(personaje) {

        if ((this.getLeft() <= personaje.getLeft() + personaje.getWidth()) && !personaje.getSalto()) {
            return this.choque = true;
            console.log("choque");

        }
        //console.log("no choque");


    }

    getLeft() {
        return this.divElemento.offsetLeft;
    }


    getRight() {
        return this.divElemento.getBoundingClientRect().x + this.div.getBoundingClientRect().width;
    }

    getTop() {
        return this.divElemento.getBoundingClientRect().y;
    }

    pararElemento() {
        this.divElemento.style.animationPlayState = "paused";
    }

    aciertoSalta(tipo) {
        this.divElemento.removeAttribute("id", this.tipo);
        this.divElemento.setAttribute("id", tipo);
    }



}