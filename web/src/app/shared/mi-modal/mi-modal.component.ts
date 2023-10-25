import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from './modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './mi-modal.component.html',
  styleUrls: ['./mi-modal.component.css']
})
export class ModalComponent {
  visible = false;
  @Input() idEquipo: number | undefined;
  @Input() idJugador: number | undefined;

  constructor(private modalService: ModalService) {
    this.modalService.abrirModal$.subscribe(() => {
      this.visible = true;

      this.modalService.cerrarModal$.subscribe(() => {
        this.visible = false;
      });
    });
  }

  confirmarModal() {
    
  }

  cerrarModal() {
    this.visible = false;
  }
}


