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
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MiModalComponent } from './mi-equipo/mi-modal/mi-modal.component';
import { TablaJugadoresComponent } from './mi-equipo/tabla-jugadores/tabla-jugadores.component';
import { TablaEquipoComponent } from './mi-equipo/tabla-equipo/tabla-equipo.component';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule
  ],
  declarations: [
    EquiposComponent,
    InicioComponent,
    RankingComponent,
    MiEquipoComponent,
    PerfilComponent,
    MiModalComponent,
    TablaJugadoresComponent,
    TablaEquipoComponent
  ]
})
export class MaterialComponentsModule { }
