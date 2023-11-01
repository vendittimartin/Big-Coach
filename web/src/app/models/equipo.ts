import { Jugador } from "./jugador"

export interface Equipo {
    idEquipo:number, 
    temporada: number, 
    puntajeTotal: number, 
    jugadores: Jugador[]
  }
