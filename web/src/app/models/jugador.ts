import {EstadisticaHistorica} from './estadisticaHistorica'
export interface Jugador {
    nombre:string, 
    equipoNBA: string, 
    posicion: string, 
    estadisticaHistorica: EstadisticaHistorica
  }