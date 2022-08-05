export interface Juego{
    
    id: number;
    nombre: string;
    imagen: string;
}

export interface Lista{
    categoria: string;
    juegos: Juego[];
}