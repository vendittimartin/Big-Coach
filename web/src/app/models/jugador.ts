import {EstadisticaHistorica} from './estadisticaHistorica'
export interface Jugador {
    id: number;
    nombre:string, 
    equipoNBA: string, 
    posicion: string, 
    puntajeTotal: number,
    estadisticaHistorica: EstadisticaHistorica
  }