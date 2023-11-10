import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CoachService } from 'src/app/services/coach.service';
import { Coach } from 'src/app/models/coach';
import { CacheService } from 'src/app/services/cache.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements AfterViewInit {
  displayedColumns: string[] = ['Posicion', 'Coach', 'Nombre', 'Club', 'Puntos'];
  dataSource = new MatTableDataSource<Coach>([]);
  loading: boolean = false;
  coachData: Coach = { email: '', nombre: '', club: '', posicion:null };
  public perfilUsuario: KeycloakProfile | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ranking: Coach[] | undefined;

  constructor(private coachService: CoachService, private cacheService: CacheService, private readonly keycloak: KeycloakService){}

  async ngAfterViewInit() {
    this.loading = true;
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
      try{
        const cachedRanking = this.cacheService.getRankingFromCache();
        if (cachedRanking) {
            this.dataSource.data = cachedRanking;
            const indice = cachedRanking.findIndex(coach => coach.email === this.coachData.email);
            if (indice >= 0){
              this.coachData.posicion = indice + 1;
              if (this.coachData.nombre !== '' && this.coachData.club !== ''){
              this.cacheService.savePerfilToCache(this.coachData);
            }}
        } else {
          const response = await this.coachService.getRanking().toPromise();        
          this.ranking = response;
          if (this.ranking){
            this.dataSource.data = this.ranking;
            this.cacheService.saveRankingToCache(this.ranking);
            const indice = this.ranking.findIndex(coach => coach.email === this.coachData.email);
            if (indice >= 0){
              this.coachData.posicion = indice + 1;
              if (this.coachData.nombre !== '' && this.coachData.club !== ''){
                this.cacheService.savePerfilToCache(this.coachData);
              }
            }
          }
          this.loading = false;
        }
        
        
      } catch(e){
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error, intentelo nuevamente...',
          showConfirmButton: false,
          timer: 2500
        })
      }
    this.dataSource.paginator = this.paginator;
    this.loading = false;
  }
}

 

