import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ModalService } from '../mi-modal/modal.service';
import {MatTableDataSource} from '@angular/material/table';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.css']
})
export class TablaJugadoresComponent implements AfterViewInit{
  displayedColumns: string[] = ['Nombre', 'Equipo', 'Pos.', 'Pts.','Ast.', 'Reb.', 'Stl.', 'Blk.','Comprar'];
  dataSource = new MatTableDataSource<Jugador>(ELEMENT_DATA);
  filtroNombre: string = '';
  equipoUsuario: Jugador[] = [];


  constructor(private modalService: ModalService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  filtrarTabla() {
    this.dataSource.filter = this.filtroNombre.trim().toLowerCase();
  }

  abrirModal() {
    this.modalService.abrirModal();
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

