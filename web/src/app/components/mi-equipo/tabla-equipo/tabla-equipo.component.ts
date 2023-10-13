import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ModalService } from '../mi-modal/modal.service';
import {MatTableDataSource} from '@angular/material/table';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-tabla-equipo',
  templateUrl: './tabla-equipo.component.html',
  styleUrls: ['./tabla-equipo.component.css']
})
export class TablaEquipoComponent implements AfterViewInit{
  displayedColumns: string[] = ['Nombre', 'Equipo', 'Pos.', 'Pts.'];
  dataSource = new MatTableDataSource<Jugador>(ELEMENT_DATA);

  constructor() {}

  ngAfterViewInit() {
   
  }
  
}

const ELEMENT_DATA: Jugador[] = [
  { Nombre:'Lebron James', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
  { Nombre:'Lebron James', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
  { Nombre:'Lebron James', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
  { Nombre:'Lebron James', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
  { Nombre:'Lebron James', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
  { Nombre:'Lebron James', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
  { Nombre:'Chris Pol', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
  { Nombre:'Russell Westbrook', Equipo: 'LAL', Posicion: 'F', Puntos: 28.7, Asistencias: 9.6, Rebotes: 1.5, Robos: 1, Tapas: 2},
];


