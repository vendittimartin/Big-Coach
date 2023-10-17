import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements AfterViewInit {
  displayedColumns: string[] = ['POS', 'Equipo', 'Puntos', 'Manager'];
  dataSource = new MatTableDataSource<usuarios>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface usuarios {
  POS: Number;
  Equipo: String;
  Puntos: String;
  Manager: string;
}
  
  const ELEMENT_DATA: usuarios[] = [
    { POS: 1, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 2, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 3, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 4, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 5, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 6, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 7, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 8, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 9, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 10, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 11, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 12, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 13, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 14, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 15, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 16, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 17, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 18, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 19, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 20, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 21, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 22, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 23, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 24, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 25, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 26, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 27, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 28, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 29, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 30, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    { POS: 31, Equipo: 'Baltimore Cornetas', Puntos: '100', Manager: 'BTK' },
    
  ];
  /* pageSize = 10; // Tamaño de página
  currentPage = 1; // Página actual
  totalItems = this.usuarios.length; // Total de elementos

  // Método para obtener los usuarios a mostrar en la página actual
  get usersToDisplay() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.usuarios.slice(startIndex, endIndex);
  }

  // Método para cambiar de página
  changePage(newPage: number) {
    this.currentPage = newPage;
  }*/

