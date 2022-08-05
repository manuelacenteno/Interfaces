class Personaje {

    constructor(personaje) {
        this.personaje = personaje;
        this.contenedor = personaje;
        this.salto = false;


        //this.selectPersonaje = "nena";
    }

    setPersonaje(personaje) {
        this.selectPersonaje = personaje;
    }

    getSalto() {
        return this.salto;
    }

    saltar() {
        this.salto = true;


        personaje.classList.add("nena-saltando"); //AGREGO LA CLASE NUEVA
        personaje.classList.remove("nena-corriendo"); //BORRO LA CLASE QUE ESTA


        let intervalo = setInterval(() => {
            personaje.classList.remove("nena-saltando");
            personaje.classList.add("nena-corriendo");
            this.salto = false;
            clearInterval(intervalo);
        }, 1000)

    }

    chocar() {
        personaje.classList.remove("nena-corriendo");
        personaje.classList.add("nena-choque");

    }





    getTop() {
        return this.contenedor.getBoundingClientRect().top;
    }

    getLeft() {
        //return this.contenedor.getBoundingClientRect().left;
        return this.contenedor.offsetLeft;
    }

    getBottom() {
        return this.contenedor.getBoundingClientRect().bottom;
    }

    getWidth() {
        return this.contenedor.clientWidth;
    }







}