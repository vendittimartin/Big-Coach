import { Jugador } from "./jugador"

export interface Equipo {
    idquipo:number, 
    temporada: number, 
    puntajeTotal: number, 
    jugadores: Jugador[]
  }
