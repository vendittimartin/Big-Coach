import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { MiEquipoComponent } from './components/mi-equipo/mi-equipo.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: InicioComponent, },
  { path: 'equipos', component: EquiposComponent},
  { path: 'mi-equipo', component: MiEquipoComponent, canActivate:[AuthGuard]},
  { path: 'ranking', component: RankingComponent},
  { path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard]},
  { path: 'sobre-nosotros', component: InicioComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
