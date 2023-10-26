import { AfterViewInit, Component, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Jugador } from 'src/app/models/jugador';
import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.css']
})
export class TablaJugadoresComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['Nombre', 'Equipo', 'Pos.', 'Pts.', 'Ast.', 'Reb.', 'Stl.', 'Blk.', 'Comprar'];
  filtroNombre: string = '';
  modalOpen: boolean = false;
  @Input() equipoUsuario: Equipo[] = [];
  @Input() jugadoresEncontrados: Jugador[] = [];
  dataSource = new MatTableDataSource<Jugador>(this.jugadoresEncontrados);
  @Output() confirmBuy = new EventEmitter<Jugador>();
  selectedPlayer: Jugador | null = null;

  constructor() {}

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

  abrirModal(jugador: any): void{
    this.selectedPlayer = jugador;
    this.modalOpen = true;
  }

  handlePurchaseConfirmation(isConfirmed: boolean): void {
    if (isConfirmed && this.selectedPlayer !== null) {
      this.confirmBuy.emit(this.selectedPlayer);
      this.modalOpen = false;
    } else {
      this.modalOpen = false;
    }
  } 
}
