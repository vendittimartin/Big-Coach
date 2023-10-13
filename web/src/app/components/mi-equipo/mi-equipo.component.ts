import {AfterViewInit, Component } from '@angular/core';
import { TablaJugadoresComponent } from './tabla-jugadores/tabla-jugadores.component';
import { Jugador } from 'src/app/models/jugador';
@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent implements AfterViewInit{

  equipoUsuario: Jugador[] = [];
  constructor() {}


  ngAfterViewInit() {

  }
}

