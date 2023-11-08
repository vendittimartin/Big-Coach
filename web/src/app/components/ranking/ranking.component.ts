import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CoachService } from 'src/app/services/coach.service';
import { Coach } from 'src/app/models/coach';
import { CacheService } from 'src/app/services/cache.service';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ranking: Coach[] | undefined;

  constructor(private coachService: CoachService, private cacheService: CacheService){}

  async ngAfterViewInit() {
      try{
        const cachedRanking = this.cacheService.getRankingFromCache();
        if (cachedRanking) {
            this.dataSource.data = cachedRanking;
        } else {
          this.loading = true;
          const response = await this.coachService.getRanking().toPromise();        
          this.ranking = response;
          if (this.ranking){
            this.dataSource.data = this.ranking;
            this.cacheService.saveRankingToCache(this.ranking);
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

 

