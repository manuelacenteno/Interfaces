class Ficha {

    constructor(posX, posY, radio, color, contexto, colorBorde, id, jugador) {
        this.posX = posX;
        this.posY = posY;
        this.fill = color;
        this.colorBorde = colorBorde;
        this.ctx = contexto;
        this.radio = radio;
        this.resaltado = false;
        this.resaltadoEstilo = 'black';
        this.jugador = jugador;
        this.id = id;
        this.img = new Image();
        if (jugador == 1) {
            this.img.src = "img/imgCuatroLinea/fichaAmarilla.png";
        } else {
            this.img.src = "img/imgCuatroLinea/fichaRoja.png";
        }

    }

    setImg(img) {
        this.img.src = img;
    }

    setFill(fill) {
        this.fill = fill;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.fill = color;
    }

    setPosicion(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getJugador() {
        return this.jugador;
    }

    setJugador(jug) {
        this.jugador = jug;
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY(),
        }
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getFill() {
        return this.fill;
    }

    setResaltado(resaltado) {
        this.resaltado = resaltado;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.img;
        this.ctx.drawImage(this.img, this.posX - 18, this.posY - 18, this.radio * 2.5, this.radio * 2.5);
        this.ctx.fill();
        if (this.resaltado) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 4;
            this.ctx.stroke();
        }
        this.ctx.closePath();
    }

    drawFichaTablero() {
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.ctx.fill();
        if (this.resaltado) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 4;
            this.ctx.stroke();
        }
        this.ctx.closePath();
    }

    getRadio() {
        return this.radio;
    }


    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }


    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }
}