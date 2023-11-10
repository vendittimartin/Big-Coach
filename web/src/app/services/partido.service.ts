import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient) {}

  getPartidos(): Observable<Partido[]> {

    const url = `${environment.backendForFrontendUrl}/getGamesByDateNow`;
    return this.http.get(url).pipe(
      map((response: any) => response as Partido[])
    );
  }
}
