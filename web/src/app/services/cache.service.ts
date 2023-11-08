import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private readonly EXPIRATION_KEY = 'rankingCacheExpiration';

  constructor() { }

  saveRankingToCache(data: any): void {
    localStorage.setItem('rankingCache', JSON.stringify(data));
    const expiration = this.calculateExpirationDate();
    localStorage.setItem(this.EXPIRATION_KEY, expiration.toISOString());
  }

  getRankingFromCache(): any | null {
    const cachedData = localStorage.getItem('rankingCache');
    const expiration = localStorage.getItem(this.EXPIRATION_KEY);
    if (cachedData && expiration) {
      const expirationDate = new Date(expiration);
      if (new Date() < expirationDate) {
        return JSON.parse(cachedData);
      } else {
        this.clearCache();
        return null;
      }
    }
    return null;
  }

 saveEquipoToCache(data: any): void {
    localStorage.setItem('equipoCache', JSON.stringify(data));
  }

 getEquipoFromCache(): any | null {
    const cachedData = localStorage.getItem('equipoCache');
    if(cachedData){
      return JSON.parse(cachedData);
    } else {
      return null;
    }
  } 

  savePerfilToCache(data: any): void {
    localStorage.setItem('perfilCache', JSON.stringify(data));
  }

  getPerfilFromCache(): any | null {
    const cachedData = localStorage.getItem('perfilCache');
    if(cachedData){
      return JSON.parse(cachedData);
    } else {
      return null;
    }
  } 

  private clearCache(): void {
    localStorage.removeItem('rankingCache');
    localStorage.removeItem(this.EXPIRATION_KEY);
  }

  private calculateExpirationDate(): Date {
    const now = new Date();
    let expiration = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30, 0); // Establece la hora de vencimiento a las 8:30 AM
    if (now.getHours() >= 8) {
      expiration = new Date(expiration.getTime() + 24 * 60 * 60 * 1000); // Si ya ha pasado las 8:30 AM hoy, ajusta la fecha de vencimiento para mañana
    }
    return expiration;
  }
}
