import { Component, AfterViewInit } from '@angular/core';
import { CacheService } from 'src/app/services/cache.service';
import { Coach } from 'src/app/models/coach';

@Component({
  selector: 'app-perfil-flotante',
  templateUrl: './perfil-flotante.component.html',
  styleUrls: ['./perfil-flotante.component.css']
})
export class PerfilFlotanteComponent implements AfterViewInit {

  coachData: Coach = { email: '', nombre: '', club: '', posicion:null };

  constructor(private cacheService: CacheService){}

  ngAfterViewInit(){
    const coachData = this.cacheService.getPerfilFromCache();
    if(coachData){
      this.coachData = coachData;
      console.log(this.coachData);
      console.log(this.coachData.posicion);
    }
  }
}
