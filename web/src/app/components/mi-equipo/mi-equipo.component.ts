import { Component, OnInit } from '@angular/core';
import { TablaJugadoresComponent } from './tabla-jugadores/tabla-jugadores.component';
import { Jugador } from 'src/app/models/jugador';
import { JugadorService } from 'src/app/services/jugador.service';
@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent implements OnInit{

  equipoUsuario: Jugador[] = [];
  jugadoresEncontrados: Jugador[] = [];
  nombreJugador: string = '';
  listarTabla: boolean = false;
  constructor(private jugadorService: JugadorService) {}


  ngOnInit() {
    //si el equipo.length < 5
  }

  onButtonClick(){
    this.jugadorService.getJugadorByNombre(this.nombreJugador).subscribe((jugadores) => {
      this.jugadoresEncontrados = jugadores as Jugador[];
      this.listarTabla = true;
      console.log(jugadores);
    });
  }

}

