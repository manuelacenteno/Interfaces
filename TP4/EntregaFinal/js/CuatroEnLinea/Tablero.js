class Tablero {

    constructor(posX, posY, w, h, color, ctx, tamanio) {

        this.posX = posX;
        this.posY = posY;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.posXAux = this.posX + 130;
        this.posYAux = this.posY;
        this.matriz = [];
        this.fichas = []
        this.tamanio = tamanio;
        if (this.tamanio == 4) {
            this.columnas = 6;
            this.filas = 5;
        } else if (this.tamanio == 5) {
            this.columnas = 7;
            this.filas = 6;
        } else if (this.tamanio == 6) {
            this.columnas = 8;
            this.filas = 7;
        }
        this.drawFichas();
    }

    //draw() {
    // this.ctx.fillStyle(color);
    //this.ctx.beginPath();
    //this.ctx.strokeStyle = "#2e2735";
    //this.ctx.lineWidth = 2;
    //this.ctx.strokeRect(this.posX, this.posY, this.w, this.h);

    //     this.ctx.fillRect(260,95,600,460);
    // ctx.strokeRect(0, 0, 50, 50);
    // this.ctx.closePath();


    //}

    drawFichas() {
        for (let i = 0; i < 42; i++) {
            let ficha = new Ficha(this.posXAux, this.posYAux, 15, "#ffffff", this.ctx, this.color);
            this.fichas.push(ficha);
        }
    }

    drawJuego(tamanio) {

        this.ctx.fillStyle = "#2e2735";
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(this.posX, this.posY, this.w, this.h);

        for (let col = 0; col < this.columnas; col++) {
            for (let row = 0; row < this.filas; row++) {
                let ficha = this.matriz[col][row];
                if (ficha.getId() == 0) {
                    ficha.draw();

                } else {
                    ficha.drawFichaTablero();
                }


            }
        }
    }

    iniciarJuego(tamanio) {
        this.ctx.fillStyle = "#2e2735";
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(this.posX, this.posY, this.w, this.h);
        this.posXAux += 15;
        this.matriz = [];
        for (let col = 0; col < this.columnas; col++) {
            this.posXAux += 50;
            this.posYAux = this.posY + 30;
            this.matriz[col] = [];
            for (let row = 0; row < this.filas; row++) {
                this.posYAux += 50;

                let ficha = new Ficha(this.posXAux, this.posYAux, 15, "#ffffff", this.ctx, this.color);
                ficha.drawFichaTablero();
                this.matriz[col][row] = ficha;
            }
        }
    }

    checkInsert(ficha) {
        this.posXAux = this.posX + 145;
        this.posYAux = this.posY + 45;
        for (let col = 0; col < this.columnas; col++) {
            this.posXAux += 50;

            if ((this.posXAux + 15 > ficha.getPosX()) && (ficha.getPosX() > this.posXAux - 15) &&
                (this.posYAux + 15 > ficha.getPosY()) && (ficha.getPosY() > this.posYAux - 15)) {
                return col;
            }
        }

        return -1;
    }

    insertarFicha(col, turno) {

        let rowAux = -1;
        for (let row = this.filas - 1; row >= 0; row--) {
            if (this.matriz[col][row].getId() != 0) {

                this.matriz[col][row].setId(0);
                this.matriz[col][row].setJugador(turno);

                if (turno == 1) {
                    this.matriz[col][row].setImg("img/imgCuatroLinea/fichaAmarilla.png");
                } else if (turno == 2) {
                    this.matriz[col][row].setImg("img/imgCuatroLinea/fichaRoja.png");
                }

                rowAux = row;

                break;

            }

        }

        return rowAux;
    }

    esGanador(jugador, col, fila) {
        let exito = this.checkHorizontal(jugador)
        if (!exito) {
            exito = this.checkVertical(jugador);
            if (!exito) {
                exito = this.checkDiagonalIzq(jugador, col, fila);
                if (!exito) {
                    exito = this.checkDiagonalDer(jugador, col, fila);
                }
            }
        }

        return exito;
    }

    checkVertical(jugador) {

        let contador = 0;
        for (let i = 0; i < this.columnas; i++) {

            for (let j = 0; j < this.filas; j++) {
                let jug = this.matriz[i][j].getJugador();

                if (jugador == jug) {

                    contador++;

                    if (contador == this.tamanio) {
                        console.log(contador);
                        return jugador;
                    }
                } else { contador = 0; }
            }

        }
        return false;


    }


    checkHorizontal(jugador) {

        let contador = 0;
        for (let j = 0; j < this.filas; j++) {
            for (let i = 0; i < this.columnas; i++) {


                let jug = this.matriz[i][j].getJugador();

                if (jugador == jug) {

                    contador++;
                    if (contador == this.tamanio) {
                        return jugador;
                    }

                } else { contador = 0; }
            }

        }

        return false;


    }

    checkDiagonalIzq(jugador, col, fila) {
        let contador = 0;
        while (col < this.columnas && fila < this.filas) {
            let jug = this.matriz[col][fila].getJugador();
            if (jugador == jug) {

                contador++;
                if (contador == this.tamanio) {
                    return jugador;
                }

            } else { contador = 0; }
            col++;
            fila++;

        }

        return false;

    }

    checkDiagonalDer(jugador, col, fila) {
        let contador = 0;
        while (col > 0 && fila < this.filas) {
            let jug = this.matriz[col][fila].getJugador();
            if (jugador == jug) {

                contador++;
                console.log(contador);
                if (contador == this.tamanio) {
                    return jugador;
                }
            } else { contador = 0; }
            col--;
            fila++;

        }

        return false;

    }




}