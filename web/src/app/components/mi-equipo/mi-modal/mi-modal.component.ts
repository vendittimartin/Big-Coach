import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-modal.component.html',
  styleUrls: ['./mi-modal.component.css']
})
export class MiModalComponent {
  constructor(private modalService: ModalService, private dialogRef: MatDialogRef<MiModalComponent>) {}

  abrirMiModal() {
    this.modalService.abrirModal();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
  
}
