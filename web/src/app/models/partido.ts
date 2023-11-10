export interface Partido {
    id: number;
    equipo1: {
        id: string;
        nombre: string;
        logo: string;
    };
    equipo2: {
        id: string;
        nombre: string;
        logo: string;
    };
    puntosEquipo1: number;
    puntosEquipo2: number;
  }
