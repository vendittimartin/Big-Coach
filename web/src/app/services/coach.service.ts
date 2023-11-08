import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Coach } from '../models/coach';

@Injectable({
    providedIn: 'root'
})
export class CoachService {

    constructor(private http: HttpClient) {
    }

    getCoachByID(nombre: string): Observable<Coach> {
        const url = `${environment.backendForFrontendUrl}/coach/${nombre}`;

        return this.http
            .get(url).pipe(
                map((response: any) => response as Coach)
              );
    }

    getRanking(): Observable<Coach[]> {
        const url = `${environment.backendForFrontendUrl}/coach/ranking`;

        return this.http
            .get(url).pipe(
                map((response: any) => response as Coach[])
              );
    }

    createCoach(coach: Coach): Observable<Coach> { 
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        const url = `${environment.backendForFrontendUrl}/coach`;

        return this.http.post<Coach>(url, coach, {headers});
    }
}




