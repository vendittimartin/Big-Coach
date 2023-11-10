import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Partido } from 'src/app/models/partido';
import { CacheService } from 'src/app/services/cache.service';
import { CoachService } from 'src/app/services/coach.service';
import { NewsService } from 'src/app/services/news.service';
import { PartidoService } from 'src/app/services/partido.service';
import { Coach } from 'src/app/models/coach';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-inicio-log',
  templateUrl: './inicio-log.component.html',
  styleUrls: ['./inicio-log.component.css'] 
})
export class InicioLogComponent implements OnInit {
  images: string[] = [
    '../../../assets/img/carrousel-1.jpg',
    '../../../assets/img/carrousel-2.jpg',
    '../../../assets/img/carrousel-3.jpg',
    '../../../assets/img/carrousel-4.jpg',
    '../../../assets/img/carrousel-5.jpg'  
  ];
  coachData: Coach = { email: '', nombre: '', club: '', posicion:null };
  public perfilUsuario: KeycloakProfile | null = null;
  slides: any[] = [];
  partidos: Partido[] = [];

  constructor(private newsService: NewsService, private partidoService: PartidoService, private cacheService: CacheService, private coachService: CoachService, private readonly keycloak: KeycloakService) {}

  async ngOnInit() {
    const perfilCache = this.cacheService.getPerfilFromCache();
    if (perfilCache){
        this.coachData = perfilCache;
    } else {
        const isLogged = await this.keycloak.isLoggedIn();
        if (isLogged){
          this.perfilUsuario = await this.keycloak.loadUserProfile();
          this.perfilUsuario.email ? this.coachData.email = this.perfilUsuario.email : null;
          try {
            const response = await this.coachService.getCoachByID(this.coachData.email).toPromise();
            response? this.coachData = response : undefined
            if(this.coachData.club !== ''){
              this.cacheService.savePerfilToCache(this.coachData);
            }
          }
          catch(e){
          }
      }
    }

    this.newsService.getNews().subscribe((response: any[]) => {
      this.slides = response.map((item: Noticia) => ({
        title: item.title,
        url: item.url,
        source: item.source
      }));
    });

    this.partidoService.getPartidos().subscribe((response: any[]) => {
      this.partidos = response.map((res: Partido) => ({
        id: res.id,
        equipo1: {
          id: res.equipo1.id,
          nombre: res.equipo1.nombre,
          logo: `../../../assets/img/Logos/${res.equipo1.nombre}.png`
        },
        equipo2: {
          id: res.equipo2.id,
          nombre: res.equipo2.nombre,
          logo: `../../../assets/img/Logos/${res.equipo2.nombre}.png`
        },
        puntosEquipo1: res.puntosEquipo1,
        puntosEquipo2: res.puntosEquipo2
      }));
    });
  }

  currentIndex: number = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
