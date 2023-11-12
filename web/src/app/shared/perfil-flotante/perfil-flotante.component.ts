import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CacheService } from 'src/app/services/cache.service';
import { Coach } from 'src/app/models/coach';

@Component({
  selector: 'app-perfil-flotante',
  templateUrl: './perfil-flotante.component.html',
  styleUrls: ['./perfil-flotante.component.css']
})
export class PerfilFlotanteComponent implements OnChanges {

  @Input() coachData: Coach = { email: '', nombre: '', club: '', posicion:null };

  constructor(private cacheService: CacheService){}

  ngOnChanges(changes: SimpleChanges){
    if (changes['coachData']) {
      this.coachData = this.coachData;
    }
  }
}
