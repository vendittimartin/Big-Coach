import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquiposComponent } from './equipos/equipos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RankingComponent } from './ranking/ranking.component';
import { MiEquipoComponent } from './mi-equipo/mi-equipo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatButtonModule } from '@angular/material/button';
import { InicioLogComponent } from './inicio-log/inicio-log.component';
import { MiModalComponent } from './mi-equipo/mi-modal/mi-modal.component';
import { TablaJugadoresComponent } from './mi-equipo/tabla-jugadores/tabla-jugadores.component';
import { TablaEquipoComponent } from './mi-equipo/tabla-equipo/tabla-equipo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { SobreElJuegoComponent } from './sobre-el-juego/sobre-el-juego.component';
import { PerfilFlotanteComponent } from '../shared/perfil-flotante/perfil-flotante.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    EquiposComponent,
    InicioComponent,
    RankingComponent,
    MiEquipoComponent,
    PerfilComponent,
    InicioLogComponent,
    MiModalComponent,
    TablaJugadoresComponent,
    TablaEquipoComponent,
    SobreElJuegoComponent,
    PerfilFlotanteComponent
  ]
})
export class MaterialComponentsModule { }
