import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews(): Observable<Noticia[]> {

    const url = `${environment.backendForFrontendUrl}/getNoticias`;
    return this.http.get(url).pipe(
      map((response: any) => response as Noticia[])
    );
  }
}
