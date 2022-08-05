class Temporizador {

    constructor(id, inicio, final) {
        this.id = id;
        this.inicio = inicio;
        this.final = final;
        this.contador = this.inicio;
    }
    getInicio() {
        return this.inicio;
    }
    getFinal() {
        return this.final;
    }

    conteoSegundos() {
        if (this.contador == this.final) {
            this.conteoSegundos = null;
            return;
        }

        document.getElementById(this.id).innerHTML = this.contador--;
        conteo = setTimeout(this.conteoSegundos.bind(this), 1000);
    }

}