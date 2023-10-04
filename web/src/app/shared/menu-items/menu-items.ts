import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
}

const MENUITEMS = [  
  { state: 'inicio', name: 'Inicio', type: 'link' },
  { state: 'mi-equipo', name: 'Mi equipo', type: 'link'},
  { state: 'equipos', name: 'Equipos', type: 'link' },
  { state: 'ranking', name: 'Ranking', type: 'link' },
  { state: 'perfil', name: 'Perfil', type: 'link' }
];

@Injectable()
export class MenuItems {

  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
  
}
