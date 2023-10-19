import { AfterViewInit, Component, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ModalService } from '../../../shared/mi-modal/modal.service';
import { MatTableDataSource } from '@angular/material/table';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.css']
})
export class TablaJugadoresComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['Nombre', 'Equipo', 'Pos.', 'Pts.', 'Ast.', 'Reb.', 'Stl.', 'Blk.', 'Comprar'];
  filtroNombre: string = '';
  equipoUsuario: Jugador[] = [];
  @Input() jugadoresEncontrados: Jugador[] = [];
  dataSource = new MatTableDataSource<Jugador>(this.jugadoresEncontrados);

  constructor(private modalService: ModalService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['jugadoresEncontrados']) {
      this.dataSource.data = this.jugadoresEncontrados;
    }
  }

  filtrarTabla() {
    this.dataSource.filter = this.filtroNombre.trim().toLowerCase();
  }

  abrirModal() {
    this.modalService.abrirModal();
  }
}
