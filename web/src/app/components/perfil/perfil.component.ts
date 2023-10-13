import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  public perfilUsuario: KeycloakProfile | null = null;
  public isLogueado = false;

  constructor(private readonly keycloak: KeycloakService,private router: Router){}

  async ngOnInit() {
    this.isLogueado = await this.keycloak.isLoggedIn();

    if (this.isLogueado) {
      this.perfilUsuario = await this.keycloak.loadUserProfile();
    }
  }

  async cerrarSesion(){
    await this.keycloak.logout();
    this.router.navigate(['/']);
  }
}
