import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-tabla-equipo',
  templateUrl: './tabla-equipo.component.html',
  styleUrls: ['./tabla-equipo.component.css']
})
export class TablaEquipoComponent implements OnChanges{
  displayedColumns: string[] = ['Nombre', 'Equipo', 'Pos.', 'Puntaje'];
  @Input() jugadores: Jugador[] = [];
  dataSource = new MatTableDataSource<Jugador>(this.jugadores);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['jugadores'] && changes['jugadores'].currentValue) {
      this.dataSource.data = changes['jugadores'].currentValue;
    }
  }
  
}



