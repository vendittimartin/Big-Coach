import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { Jugador } from 'src/app/models/jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { CoachService } from 'src/app/services/coach.service';
import { Coach } from 'src/app/models/coach';
@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent implements OnInit{
  public perfilUsuario: KeycloakProfile | null = null;
  equipoUsuario: Equipo[] = [];
  coachData: Coach = { email: '', nombre: '', club: '' };
  jugadoresEncontrados: Jugador[] = [];
  nombreJugador: string = '';
  listarTabla: boolean = false;
  armarEquipo: boolean = true;
  listarJugadoresUsuario: boolean = false;
  coachNuevo: boolean = false;
  constructor(private coachService: CoachService, private jugadorService: JugadorService, private equipoService: EquipoService, private readonly keycloak: KeycloakService) {}

  async ngOnInit() {
    this.perfilUsuario = await this.keycloak.loadUserProfile();
    if (this.perfilUsuario.email){
      this.coachData.email = this.perfilUsuario.email;
    }
    this.coachService.getCoachByID(this.coachData.email).subscribe(coach =>{this.coachData = coach;})
    if (this.coachData.club != ''){
      this.equipoService.getEquipoByCoach(this.coachData.email).subscribe((equipo) => {
        this.equipoUsuario = equipo;
        console.log(equipo);
        if (this.equipoUsuario[0].jugadores.length < 5){
            this.armarEquipo = true;
            this.listarJugadoresUsuario = true;
          }
          else{
            this.armarEquipo = false;
            this.listarJugadoresUsuario = true;
          }
      });
    } else {
      this.armarEquipo = false;
      this.coachNuevo = true;
    }
  }

  onButtonClick(){
    this.jugadorService.getJugadorByNombre(this.nombreJugador).subscribe((jugadores) => {
      this.jugadoresEncontrados = jugadores as Jugador[];
      this.listarTabla = true;
      console.log(jugadores);
    });
  }

  registrarCoach(){
    console.log(this.coachData)
    this.coachService.createCoach(this.coachData)
  }

}

