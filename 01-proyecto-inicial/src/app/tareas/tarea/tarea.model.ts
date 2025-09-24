export interface Tarea {
    id: string;
    idUsuario: string;
    titulo: string;
    resumen: string;
    expira: string;
}

export interface infoNuevaTarea {
    tituloIngresado: string;
    resumenIngresado: string;
    fechaExpiraIngresada: string;
}