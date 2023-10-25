import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class MiEquipoComponent implements AfterViewInit{
  public perfilUsuario: KeycloakProfile | null = null;
  equipoUsuario: Equipo[] = [];
  coachData: Coach = { email: '', nombre: '', club: '' };
  jugadoresEncontrados: Jugador[] = [];
  nombreJugador: string = '';
  listarTabla: boolean = false;
  armarEquipo: boolean = false;
  listarJugadoresUsuario: boolean = false;
  coachNuevo: boolean = false;
  error: boolean = false;
  errorAlBuscar: boolean = false;
  constructor(private coachService: CoachService, private jugadorService: JugadorService, private equipoService: EquipoService, private readonly keycloak: KeycloakService) {}

  async ngAfterViewInit() {
    try{
    this.perfilUsuario = await this.keycloak.loadUserProfile();
    if (this.perfilUsuario.email){
      this.coachData.email = this.perfilUsuario.email;
    }
        const response = await this.coachService.getCoachByID(this.coachData.email).toPromise();
        response? this.coachData = response : undefined
        if (this.coachData.club !== ''){
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
    } catch (e) {
      this.coachNuevo = true; 
      this.armarEquipo = false; 
    }
  }

  onButtonClick(){
    if (this.nombreJugador.length >= 3){
    this.jugadorService.getJugadorByNombre(this.nombreJugador).subscribe((jugadores) => {
      this.errorAlBuscar = false;
      this.jugadoresEncontrados = jugadores as Jugador[];
      this.listarTabla = true;
      console.log(jugadores);
    });
  } else {
    this.errorAlBuscar = true;
  }
  }

  registrarCoach(){
    if(this.coachData.club !== '' && this.coachData.nombre !== ''){
    this.error = false;
    this.coachService.createCoach(this.coachData).subscribe(
      (response) =>  {
        this.coachNuevo = false;
        this.armarEquipo = true;
        this.listarJugadoresUsuario = true;
      },
      (error) => console.log(error)
    )}
    else {
      this.error = true;
    }
  }

}

