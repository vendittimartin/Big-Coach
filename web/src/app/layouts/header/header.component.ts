import { AfterViewInit, Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  showMenu: boolean = false;
  public isLogueado = false;
  constructor(private readonly keycloak: KeycloakService, private cacheService: CacheService){}

  async ngAfterViewInit() {
    this.isLogueado = await this.keycloak.isLoggedIn();

  }
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  iniciarSesion(){
    this.keycloak.login();
  }

  registrarUsuario(){
    this.keycloak.register();
  }

  cerrarSesion(){
    this.cacheService.clearLoggedCache();
    this.keycloak.logout();
  }
}
