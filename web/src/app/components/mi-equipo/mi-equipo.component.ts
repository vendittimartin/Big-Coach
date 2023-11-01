import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { Jugador } from 'src/app/models/jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { CoachService } from 'src/app/services/coach.service';
import { Coach } from 'src/app/models/coach';
import Swal from 'sweetalert2';

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
  loading: boolean = false;
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
          if (this.equipoUsuario[0].jugadores !== undefined){
            if (this.equipoUsuario[0].jugadores.length < 5){
              this.armarEquipo = true;
              this.listarJugadoresUsuario = true;
            }
            else{
              this.armarEquipo = false;
              this.listarJugadoresUsuario = true;
            }
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
    this.loading = true;
    this.jugadorService.getJugadorByNombre(this.nombreJugador).subscribe((jugadores) => {
      this.jugadoresEncontrados = jugadores as Jugador[];
      this.listarTabla = true;
      this.loading = false;
    });
  } else {
    Swal.fire({
      icon: 'error',
      text: 'Debes ingresar al menos 3 letras para realizar la búsqueda',
      showConfirmButton: false,
      timer: 2500
    })
  }
  }

  registrarCoach(){
    if(this.coachData.club !== '' && this.coachData.nombre !== ''){
    this.error = false;
    this.coachService.createCoach(this.coachData).subscribe(
      (response) =>  {
        this.obtenerEquipo();
        this.listarJugadoresUsuario = true;
        Swal.fire({
          icon: 'success',
          title: 'Genial!',
          text: 'Es hora de armar tu equipo y hacerte con la victoria!',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Intentalo nuevamente!'
      })
    )}
    else {
      Swal.fire({
        icon: 'error',
        text: 'Por favor complete todos los campos',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }

  obtenerEquipo(){
    this.equipoService.getEquipoByCoach(this.coachData.email).subscribe((equipo) => {
      this.equipoUsuario = equipo;
      if (this.equipoUsuario[0].jugadores !== undefined){
        if (this.equipoUsuario[0].jugadores.length < 5){
          this.armarEquipo = true;
          this.listarJugadoresUsuario = true;
        }
        else{
          this.armarEquipo = false;
          this.listarJugadoresUsuario = true;
        }
      }
    });
  }

  handleConfirmationStatus(selectedPlayer: Jugador): void {
      this.equipoService.addJugadorAEquipo(this.equipoUsuario[0].idEquipo,selectedPlayer.id).subscribe(data => {
        const updatedJugadores = [...this.equipoUsuario[0].jugadores, selectedPlayer]; 
        this.equipoUsuario = [{ ...this.equipoUsuario[0], jugadores: updatedJugadores }];
        if(this.equipoUsuario[0].jugadores.length === 5){
          this.armarEquipo = false;
        }
        Swal.fire({
          icon: 'success',
          title: 'Genial!',
          text: 'La compra se efectuó correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }, err => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Revisa las reglas e intentalo nuevamente!'
      }))
  }

}

