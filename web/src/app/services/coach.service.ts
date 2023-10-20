import { HttpClient } from '@angular/common/http';
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
        const url = `${environment.backendForFrontendUrl}/backend/coach/${nombre}`;

        return this.http
            .get(url).pipe(
                map((response: any) => response as Coach)
              );
    }

    createCoach(coach: Coach): Observable<Coach> { 
        const url = `${environment.backendForFrontendUrl}/backend/coach`;
        console.log(url);
        return this.http.post<Coach>(url, coach, this.headers);
    }

    get headers() {
        return {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
}




