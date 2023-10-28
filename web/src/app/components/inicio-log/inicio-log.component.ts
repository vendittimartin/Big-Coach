import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-log',
  templateUrl: './inicio-log.component.html',
  styleUrls: ['./inicio-log.component.css'] 
})
export class InicioLogComponent {
  images: string[] = [
    'https://img.freepik.com/foto-gratis/cancha-baloncesto-gente-fan-sport-arena-render-3d-ilustracion_654080-1445.jpg?w=1060&t=st=1698444926~exp=1698445526~hmac=09510e90bd1ca0abdbe4765af25e6b83f6feeabc9319bbfa58cb3452fef37727',
    'https://img.freepik.com/foto-gratis/vista-silueta-jugador-baloncesto-baloncesto-espacio-negro_155003-12953.jpg?w=996&t=st=1698445740~exp=1698446340~hmac=f7c5b23bd680a75b38841f5f6a8fef01060d880d71ebcc07c5831fa949469ccd',
    'https://img.freepik.com/foto-gratis/cancha-baloncesto-gente-fan-sport-arena-render-3d-ilustracion_654080-1445.jpg?w=1060&t=st=1698444926~exp=1698445526~hmac=09510e90bd1ca0abdbe4765af25e6b83f6feeabc9319bbfa58cb3452fef37727',
  ];

  slides = [
    {
      title: 'Título de la Noticia 1',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Título de la Noticia 2',
      news: 'Otra noticia interesante que puedes agregar aquí. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Título de la Noticia 3',
      news: 'Otra noticia interesante que puedes agregar aquí. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];

  currentIndex: number = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
