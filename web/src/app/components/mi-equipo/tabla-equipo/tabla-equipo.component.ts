import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ModalService } from '../../../shared/mi-modal/modal.service';
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

const ELEMENT_DATA: Jugador[] = [];


