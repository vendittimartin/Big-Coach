import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModalService } from './mi-modal/modal.service';

@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent implements AfterViewInit{
  displayedColumns: string[] = ['Nombre', 'Equipo', 'Pos.', 'Pts.','Ast.', 'Reb.', 'Stl.', 'Blk.','Comprar'];
  dataSource = new MatTableDataSource<Jugador>(ELEMENT_DATA);
  filtroNombre: string = '';

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

export interface Jugador {
  Nombre:string, 
  Equipo: string, 
  Posicion: string, 
  Puntos: number, 
  Asistencias: number, 
  Rebotes: number, 
  Robos: number, 
  Tapas: number
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
