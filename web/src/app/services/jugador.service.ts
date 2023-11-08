import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Jugador } from '../models/jugador';

@Injectable({
    providedIn: 'root'
})
export class JugadorService {

    constructor(private http: HttpClient) {
    }

    getJugadorByNombre(nombre: string): Observable<Jugador[]> {
        const url = `${environment.backendForFrontendUrl}/jugador/${nombre}`;
          
        return this.http
            .get(url).pipe(
                map((response: any) => response as Jugador[])
              );
    }
}




