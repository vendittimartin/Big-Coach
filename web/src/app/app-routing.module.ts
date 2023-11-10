import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { InicioLogComponent } from './components/inicio-log/inicio-log.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { MiEquipoComponent } from './components/mi-equipo/mi-equipo.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SobreElJuegoComponent } from './components/sobre-el-juego/sobre-el-juego.component';

const routes: Routes = [

  { path: '', component: InicioComponent},
  { path: 'inicio-log', component: InicioLogComponent, canActivate: [AuthGuard]},
  { path: '', component: InicioComponent, },
  { path: 'equipos', component: EquiposComponent},
  { path: 'mi-equipo', component: MiEquipoComponent, canActivate:[AuthGuard]},
  { path: 'ranking', component: RankingComponent},
  { path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard]},
  { path: 'sobre-el-juego', component: SobreElJuegoComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
