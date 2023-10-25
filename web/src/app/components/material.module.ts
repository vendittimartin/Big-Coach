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


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatButtonModule
  ],
  declarations: [
    EquiposComponent,
    InicioComponent,
    RankingComponent,
    MiEquipoComponent,
    PerfilComponent,
    InicioLogComponent
  ]
})
export class MaterialComponentsModule { }
