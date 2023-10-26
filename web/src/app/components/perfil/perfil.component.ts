import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { Router } from '@angular/router';
import { Coach } from 'src/app/models/coach';
import { CoachService } from 'src/app/services/coach.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements AfterViewInit{
  public perfilUsuario: KeycloakProfile | null = null;
  public isLogueado = false;
  coachData: Coach = { email: '', nombre: '', club: '' };
  coachNuevo: boolean = false;
  renderPerfil: boolean = false;
  error: boolean = false;

  constructor(private readonly keycloak: KeycloakService,private router: Router, private coachService: CoachService){}

  async ngAfterViewInit() {
    try{
      this.perfilUsuario = await this.keycloak.loadUserProfile();
      if (this.perfilUsuario.email){
        this.coachData.email = this.perfilUsuario.email;
      }
        const response = await this.coachService.getCoachByID(this.coachData.email).toPromise();
        response? this.coachData = response : undefined
        if (this.coachData.club !== ''){ 
          this.coachNuevo = false;
          this.renderPerfil = true;
        } else {
          this.coachNuevo = true;
        }
      } catch (e) {
        this.coachNuevo = true; 
      }
  }

  async cerrarSesion(){
    await this.keycloak.logout();
    this.router.navigate(['/']);
  }

  registrarCoach(){
    if(this.coachData.club !== '' && this.coachData.nombre !== ''){
    this.error = false;
    this.coachService.createCoach(this.coachData).subscribe(
      (response) =>  {
        this.coachNuevo = false;
        this.renderPerfil = true;
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
      this.error = true;
    }
  }
}
