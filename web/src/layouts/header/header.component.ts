import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  showMenu: boolean = false;

  ngAfterViewInit() {

  }
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
