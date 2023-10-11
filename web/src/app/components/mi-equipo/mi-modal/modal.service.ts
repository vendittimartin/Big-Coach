import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiModalComponent } from '../mi-modal/mi-modal.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  abrirModal(): void {
    const dialogRef = this.dialog.open(MiModalComponent, {
      width: '400px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`El modal se cerró con resultado: ${result}`);
    });
  }

}
