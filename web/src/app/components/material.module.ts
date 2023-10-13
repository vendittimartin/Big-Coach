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
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    EquiposComponent,
    InicioComponent,
    RankingComponent,
    MiEquipoComponent,
    PerfilComponent
  ]
})
export class MaterialComponentsModule { }
