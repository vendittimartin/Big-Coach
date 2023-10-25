import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-inicio-log',
  templateUrl: './inicio-log.component.html',
  styleUrls: ['./inicio-log.component.css']
})
export class InicioLogComponent implements OnInit {
  private currentIndexSubject = new BehaviorSubject<number>(0);
  currentIndex$ = this.currentIndexSubject.asObservable();
  totalSlides = 3; // Cambia esto al número total de diapositivas que tengas
  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    this.currentSlide = 0;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.currentIndexSubject.next(this.currentSlide);
  }

  prevSlide() {
    this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.totalSlides - 1;
    this.currentIndexSubject.next(this.currentSlide);
  }
}
