import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Jugador } from '../models/jugador';
import { Equipo } from '../models/equipo';

@Injectable({
    providedIn: 'root'
})
export class EquipoService {

    constructor(private http: HttpClient) {
    }

    getEquipoByCoach(nombre: string): Observable<Equipo[]> {
        const url = `${environment.backendForFrontendUrl}/backend/equipo/${nombre}`;

        return this.http
            .get(url).pipe(
                map((response: any) => response as Equipo[])
              );
    }

    addJugadorAEquipo(idEquipo: number, idJugador: number){
        const url = `${environment.backendForFrontendUrl}/backend/equipo/${idEquipo}/agregarJugador/${idJugador}`;

        return this.http
            .get(url).pipe(
                map((response: any) => response as Equipo[])
              );
    }
}




