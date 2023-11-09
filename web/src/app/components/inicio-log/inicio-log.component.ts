import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Partido } from 'src/app/models/partido';
import { NewsService } from 'src/app/services/news.service';
import { PartidoService } from 'src/app/services/partido.service';

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

  slides: any[] = [];
  partidos: Partido[] = [];

  constructor(private newsService: NewsService, private partidoService: PartidoService) {}

  ngOnInit() {
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
        },
        equipo2: {
          id: res.equipo2.id,
          nombre: res.equipo2.nombre,
        }
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
